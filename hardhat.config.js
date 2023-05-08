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
            version: "0.8.18",
            COMPILER_SETTINGS,
        }
    ],
  },
  
  etherscan: {
    apiKey: {
      dgs: "{api_key_ether}"
    },
    customChains: [
      {
        network: "",
        chainId: 2222,
        urls: {
          apiURL: "",
          browserURL: ""
        }
      }
    ]
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
      url: "",
      accounts: [`{private_key_wallet}`],
      chainId: 222
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
