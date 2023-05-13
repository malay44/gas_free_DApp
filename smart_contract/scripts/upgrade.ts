const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('Box2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x3253753f5DbF6f8C638dcEb465702C19131299c3', BoxV2);
  console.log('Box upgraded');
}

main();

export {};