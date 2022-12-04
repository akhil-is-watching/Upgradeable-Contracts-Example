require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  etherscan: {
    apiKey: "<API_KEY_ETHERSCAN>"
  },
  networks: {
    mumbai: {
      chainId: 80001,
      url: "<JSON_RPC_URL>",
      accounts: ["<PRIVATE_KEY>"]
    }
  },
  solidity: "0.8.6",
};
