const hre = require("hardhat");

// async function main() {
//   // We get the contract to deploy
//   //const CrowdHelp = await hre.ethers.getContractFactory("CrowdHelp");
//   const crowdHelp = await CrowdHelp.deploy();

//   await crowdHelp.deployed();

//   console.log("CrowdHelp deployed to:", crowdHelp.address);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

  async function main() {
    const BlockchainAid = await hre.ethers.getContractFactory("BlockchainAid");
    const blockchainAid = await BlockchainAid.deploy();
    console.log("Contract Deployed to Address:", blockchainAid.address);
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
