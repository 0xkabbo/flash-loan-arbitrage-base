require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      forking: {
        url: "https://polygon-rpc.com", // Forking mainnet for testing flash loans
      }
    }
  }
};
