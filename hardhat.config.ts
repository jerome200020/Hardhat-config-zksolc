import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-upgradable";
import "@matterlabs/hardhat-zksync-node";

import { ethers } from "ethers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  zksolc: {
    version: "latest",
    settings: {
      optimizer: {
        enabled: true,
        mode: "3",
        fallback_to_optimizing_for_size: true,
      },
      metadata: {
        bytecodeHash: "none",
      },
      enableEraVMExtensions: true,
    },
  },
  zksyncAnvil: {
    binaryPath: "/usr/local/bin/anvil-zksync", // optional
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      zksync: true,
      accounts: [
        {
          privateKey:
            "0x90e1a1a1153135cd46cf932b190eceda71f3f364cad5daa3de7210a23dd1fd83",
          balance: ethers.parseEther("100000").toString(),
        },
      ],
    },
    abstractTestnet: {
      url: "https://api.testnet.abs.xyz",
      ethNetwork: "sepolia",
      zksync: true,
      chainId: 11124,
    },
    abstractMainnet: {
      url: "https://api.mainnet.abs.xyz",
      ethNetwork: "mainnet",
      zksync: true,
      chainId: 2741,
    },
  },
  deployerAccounts: {
    abstractTestnet: 1,
    default: 0,
  },
};

export default config;
