const hre = require("hardhat");

async function main() {
  const ContractV1 = await hre.ethers.getContractFactory("V1");
  const contractv1 = await upgrades.deployProxy(ContractV1, [10], {
    initializer: "initialize",
  })
  await contractv1.deployed();
  console.log("V1 Contract deployed to:", contractv1.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
