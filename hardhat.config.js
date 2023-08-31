require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()


/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const DIGI_RPC_URL = process.env.DIGI_RPC_URL;
const PRIVATE_KEY_DGS = process.env.PRIVATE_KEY_DGS;


const COMPILER_SETTINGS = {
  optimizer: {
      enabled: true,
      runs: 1000000,
  },
  metadata: {
      bytecodeHash: "none",
  },
}

module.exports = {
  solidity: {
    compilers: [
        {
            version: "0.8.9",
            COMPILER_SETTINGS,
        }
    ],
  },
  
  etherscan: {
    apiKey: {
      dgs: "XE3SWWJ8RN7E998V4GTW8WHQVJJ3JNPXZ3",
      rmutt: "XE3SWWJ8RN7E998V4GTW8WHQVJJ3JNPXZ3"
    },
    customChains: [
      {
        network: "dgs",
        chainId: 111,
        urls: {
          apiURL: "http://172.17.254.14:4000/api",
          browserURL: "http://172.17.254.14:4000"
        }
      },
      {
        network: "rmutt",
        chainId: 101,
        urls: {
          apiURL: "http://172.21.243.174:4000/api",
          browserURL: "http://172.21.243.174:4000"
        }
      }
    ],
  },
  networks: {
    localhost: {
        chainId: 31337,
    },
    sepolia: {
        url: SEPOLIA_RPC_URL !== undefined ? SEPOLIA_RPC_URL : "",
        accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        //   accounts: {
        //     mnemonic: MNEMONIC,
        //   },
        chainId: 11155111,
    },
    dgs: {
      url: "http://172.17.254.14:8545",
      accounts: ['efa96e96c8fb1851115aec1b5d39b2499bbe8cea7c21c19d00923cd5ba2a6988'],
      chainId: 111,
      gasPrice: 50*1e9
    },
    rmutt: {
      url: "http://172.21.243.174:8545",
      accounts: ['efa96e96c8fb1851115aec1b5d39b2499bbe8cea7c21c19d00923cd5ba2a6988'],
      chainId: 101,
      gasPrice: 50*1e9
    }
  },
  defaultNetwork: "localhost",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
  },
};
