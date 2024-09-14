const hre = require("hardhat");

async function main() {
  // Get the chai contract to deploy
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode
  const chai = await Chai.deploy(); //creating an instance of our smart contract

  // Wait for chai deployment to finish
  await chai.deployed();
  console.log("Chai contract deployed to:", chai.address);

  // If you want to deploy Lock too, get the Lock contract to deploy
  const Lock = await hre.ethers.getContractFactory("Lock");

  // Set the required parameters for Lock, e.g., unlockTime and lockedAmount
  const unlockTime = Math.floor(Date.now() / 1000) + 60; // Unlock time 1 minute from now
  const lockedAmount = hre.ethers.utils.parseEther("1"); // Lock 1 Ether

  // Deploy the Lock contract with parameters
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // Wait for Lock deployment to finish
  await lock.deployed();
  console.log("Lock contract deployed to:", lock.address);
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0)) // Exit the process if successful
  .catch((error) => {
    console.error(error); // Log any errors
    process.exit(1); // Exit the process with an error code
  });
