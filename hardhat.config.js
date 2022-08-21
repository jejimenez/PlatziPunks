require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const projectId = process.env.INFURA_PROJECT_ID
const privateKey = process.env.DEPLOYER_PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby:{
      url: `https://eth-rinkeby.alchemyapi.io/v2/${projectId}`,
      accounts:[
        privateKey
      ]
    }
  }
};
