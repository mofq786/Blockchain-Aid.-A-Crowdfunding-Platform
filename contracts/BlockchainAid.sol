//SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract BlockchainAid{

// This contract is deployed by Qureshi and Team
// Mohammed Omar Farooq Qureshi
// Amaan Ali Khan
// Muhammed Abubakar

 Campaign[] private deployedCampaigns;

    function createCampaign(string memory projectTitle, string memory projectDesc, uint256 minimumContribution, uint256 targetContribution, uint256 deadline, string memory bannerUrl) public {

        Campaign campaign = new Campaign(msg.sender,minimumContribution,deadline,targetContribution,projectTitle,projectDesc,bannerUrl);
        deployedCampaigns.push(campaign);

    }

    function returnDeployedCampaigns() external view returns(Campaign[] memory){
        
        return deployedCampaigns;
    
    }
}

contract Campaign{
   // Campaign state
    enum State {
        ACTIVE,     // Campaign can receive funds / contributions
        SUCCESS,    // Campaign has reached its goal before the deadling
        EXPIRED,    // Campaign has withdrawn amount of successfully ended campaign
        ABORTED    // Campaign has terminted in-between, all the raised amount has refunded back to backers.
    }

    struct Contribution{
        address payable contributor;
        uint256 amount;
    }

    // Variables
    address payable public creator;
    uint256 public minimumContribution;
    uint256 public deadline;
    uint256 public targetContribution; // required to reach at least this much amount
    uint public reachedTargetAt; // what's the usage of this..?? -- stores when it has ended (by the fundraiser)
    uint256 public raisedAmount; // Total raised amount till now
    uint256 public noOfContributors;
    string public projectTitle;
    string public projectDes;
    string public bannerUrl;
    State public state;
    mapping(address => bool) public approvers;
    uint public approversCount;
    Contribution [] contributions;       // mapping (uint => Contribution) public contributors;
    // after work... replace this with contributions.. -- as of type array
    // Modifiers
    modifier isCreator(){
        require(msg.sender == creator,'You dont have access to perform this operation !');
        _;
    }

    modifier canContribute(){
        require(state == State.ACTIVE || state  == State.SUCCESS ,'Invalid state');
        require(block.timestamp < deadline,'Sorry Contributor, deadline has passed! No contributions can be accepted now.');
        _;
    }

   constructor(
       address _creator,
       uint256 _minimumContribution,
       uint256 _deadline,
       uint256 _targetContribution,
       string memory _projectTitle,
       string memory _projectDes,
       string memory _bannerUrl
   ) {
       creator = payable(_creator);
       minimumContribution = _minimumContribution;
       deadline = _deadline;
       targetContribution = _targetContribution;
       projectTitle = _projectTitle;
       projectDes = _projectDes;
       raisedAmount = 0;
       bannerUrl=_bannerUrl;
       state = State.ACTIVE; 
   }

    function getContributorContribution(address  _contributor) internal view returns(int){
    // Takes the contributor's address and returns their contribution amount (if found) else 0.
        int contribIndex=-1;
        for(int idx=0; idx<int(noOfContributors); idx++){
            if(_contributor == contributions[uint(idx)].contributor){
                contribIndex =  idx;
                break;
            }
        }
        return contribIndex; 
    }

    // @dev Anyone can contribute
    function contribute() public canContribute() payable {

        require(msg.value >= minimumContribution,'Contribution amount is too low !');
        address payable contributor = payable(msg.sender);
        int contributionIdx = getContributorContribution(contributor);
        if(contributionIdx == -1){    // if contributing for the first time..
            noOfContributors++;
            contributions.push(Contribution(contributor, msg.value));// store the amount of funds funded
            approvers[msg.sender] = true;
            approversCount++;
        }
        // if contributed already..
        else{
            contributions[uint(contributionIdx)].amount += msg.value;   // update the contribution
        }
        // contributors[contributor] += msg.value;    // store the amount of funds funded -- older version
        // update the global value
        raisedAmount += msg.value;                  
        isFundingReachedTarget();
    }

    function isFundingReachedTarget() internal {
        if(raisedAmount >= targetContribution && block.timestamp < deadline){
            state = State.SUCCESS; 
            reachedTargetAt = block.timestamp;
        }
    }

    function endCampaignAndCredit() public isCreator() payable {
        // perform validation..
        require(state == State.SUCCESS, 'Goal not reached, amount cannot be withdrawn. Please abort to refund to backers');
        require(block.timestamp < deadline, 'Campaign cannot be ended, deadline not reached.');
        // transfer the WHOLE amount raised to fund raiser
        creator.transfer(address(this).balance);  
        
        // Update the campaign state
        state = State.EXPIRED;
        
    }
    
    struct WithdrawalRequest {
        address creator;
        uint256 amount;
        uint256 approvalCount;
        mapping(address => bool) approvals;
        bool completed;
    }

    mapping(address => mapping(address => WithdrawalRequest)) public withdrawalRequests;

    // Function for the creator to request withdrawal
    function requestWithdrawal(uint256 amount) public isCreator {
        require(withdrawalRequests[msg.sender][address(this)].creator == address(0), "Withdrawal request already exists");
        require(amount <= address(this).balance,"amount should not exceed available funds");
        address wr = address(this);
        withdrawalRequests[msg.sender][wr].creator = msg.sender;
        withdrawalRequests[msg.sender][wr].amount = amount;
        withdrawalRequests[msg.sender][wr].approvalCount = 0;
        withdrawalRequests[msg.sender][wr].completed = false;
    }

    // Function for contributors to approve withdrawal request
    function approveWithdrawal() public {
        WithdrawalRequest storage request = withdrawalRequests[creator][address(this)];
        require(request.creator != address(0), "No withdrawal request found");
        require(!request.approvals[msg.sender], "Already approved");
        require(!request.completed, "Withdrawal request already completed");
        require(approvers[msg.sender], "Not a contribor then No Rights");

        request.approvals[msg.sender] = true;
        request.approvalCount++;

        // Check if more than 51% of contributors approved
        if (request.approvalCount  > (noOfContributors / 2)) {
            // More than 51% of contributors approved
            request.completed = true;
            payable(request.creator).transfer(request.amount);
            state = State.EXPIRED;
        }
    }

    function abortCampaignAndRefund() public isCreator() payable{
        // perform validation..
        require(block.timestamp < deadline, 'Campaign cannot be aborted, deadline passed.');
        require(state == State.ACTIVE || state == State.SUCCESS, 'Invalid state. Cannot abort campaign.');
        // refund money to backers
        for(uint idx=0; idx<noOfContributors; idx++){ // iterate through all addresses of contrdibutors
            contributions[idx].contributor.transfer(contributions[idx].amount);
            delete contributions[idx];
        } 
        // update the state..
        state = State.ABORTED;
        
    }

    function getContractBalance() public view returns(uint256){
        return address(this).balance;
    }

    function getCampaignSummary() public view returns(
    address payable projectStarter,
    uint256 minContribution,
    uint256  projectDeadline,
    uint256 goalAmount, 
    uint completedTime,
    uint256 currentAmount, 
    string memory title,
    string memory desc,
    State currentState,
    uint256 balance,
    string memory imageUrl,
    uint256 numBackers
    ){
        projectStarter=creator;
        minContribution=minimumContribution;
        projectDeadline=deadline;
        goalAmount=targetContribution;
        completedTime=reachedTargetAt;
        currentAmount=raisedAmount;
        title=projectTitle;
        desc=projectDes;
        currentState=state;
        balance=address(this).balance;
        imageUrl=bannerUrl;
        numBackers=noOfContributors;
    }
}