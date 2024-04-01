// test/4.BoxProxyV2.test.ts
import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Contract } from "ethers"

describe("Box (proxy) V2", function () {
    let box: Contract
    let boxV2: Contract

    beforeEach(async function () {
        const Box = await ethers.getContractFactory("Box")
        const BoxV2 = await ethers.getContractFactory("BoxV2")

        //initilize with 42
        box = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
        console.log(await box.getAddress(), " box/proxy")
        console.log(await upgrades.erc1967.getImplementationAddress(await box.getAddress()), " getImplementationAddress")
        console.log(await upgrades.erc1967.getAdminAddress(await box.getAddress()), " getAdminAddress")

        boxV2 = await upgrades.upgradeProxy(await box.getAddress(), BoxV2)
        console.log(await boxV2.getAddress(), " box/proxy after upgrade")
        console.log(await upgrades.erc1967.getImplementationAddress(await boxV2.getAddress()), " getImplementationAddress after upgrade")
        console.log(await upgrades.erc1967.getAdminAddress(await boxV2.getAddress()), " getAdminAddress after upgrade")
    })

    it("should retrieve value previously stored and increment correctly", async function () {
        expect(await boxV2.retrieve()).to.equal(42n)

        await boxV2.increment()
        //result = 42 + 1 = 43
        expect(await boxV2.retrieve()).to.equal(43n)

        await boxV2.store(100)
        expect(await boxV2.retrieve()).to.equal(100n)
    })

})