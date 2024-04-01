// scripts/3.upgradeV3.ts
import { ethers } from "hardhat";
import { upgrades } from "hardhat";

// need to update when deploy in testnet
// const proxyAddress = '0x35e4d778432B055cE82e77fCc757872841622DfF'

const proxyAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'

async function main() {
    console.log(proxyAddress, " original Box(proxy) address")
    const BoxV3 = await ethers.getContractFactory("BoxV3")
    console.log("upgrade to BoxV3...")
    const boxV3 = await upgrades.upgradeProxy(proxyAddress, BoxV3)
    console.log(await boxV3.getAddress(), " BoxV3 address(should be the same)")

    console.log(await upgrades.erc1967.getImplementationAddress(await boxV3.getAddress()), " getImplementationAddress")
    console.log(await upgrades.erc1967.getAdminAddress(await boxV3.getAddress()), " getAdminAddress")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
