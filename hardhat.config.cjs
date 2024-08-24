//require("dotenv").config({ path: __dirname + "/.env.local" }); // When deploying -- be careful about this path..
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000000,
    },
  },
  mocha: {
    timeout: 90000,
  },
  //defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      blockGasLimit: 1500000000000,
      chainId: 11155111,
    },
    sepolia: {

      url: "https://eth-sepolia.g.alchemy.com/v2/zKcZ0eD-TwTnQ4iMLH9GTNIjl-exhAV1",
      //accounts: [process.env.PRIVATE_KEY],
      gasPrice: 300000000000,
      saveDeployments: true,
      deploy: ["scripts/"],
    },
  },
};
