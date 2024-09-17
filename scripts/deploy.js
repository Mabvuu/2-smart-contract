const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); // Match the casing exactly as in your contract
  const chai = await Chai.deploy(); // Creating an instance of our smart contract

  await chai.deployed(); // Deploying your smart contract

  console.log("Deployed contract address:", chai.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
