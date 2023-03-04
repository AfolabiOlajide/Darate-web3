/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    networks: {
      hardhat: {},
      fantom_testnet: {
        rpc: "https://rpc.ankr.com/fantom_testnet	",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
      fantom: {
        rpc: "https://rpc.ankr.com/fantom/",
        accounts: [`0x${process.env.PRIVATE_KEY}`], 
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
