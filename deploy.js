const hre = require("hardhat");

async function main() {
  // Aave V3 Pool Addresses Provider (Example: Polygon Mainnet)
  const POLYGON_V3_ADDRESS_PROVIDER = "0xa97684ead0e4511901a590373c2a91f0b7f124b3";

  const FlashLoan = await hre.ethers.getContractFactory("FlashLoanSimple");
  const flashLoan = await FlashLoan.deploy(POLYGON_V3_ADDRESS_PROVIDER);

  await flashLoan.waitForDeployment();

  console.log(`Flash Loan Contract deployed to: ${await flashLoan.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
