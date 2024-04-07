import web3 from "../web3";
import BlockchainAid from "../../artifacts/contracts/BlockchainAid.sol/BlockchainAid.json";

const blockchainAidContractAddress = "0x764103c75906C024AdceFAa5e2774fde970a95B6";
//0x059Dd7e455c19eA48bdbdDc176C2edaaC36bE420
const blockchainAid = new web3.eth.Contract(
  BlockchainAid.abi,
  blockchainAidContractAddress
);

export default blockchainAid;
