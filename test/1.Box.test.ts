// test/1.Box.test.ts
import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract } from "ethers"

describe("Box", function () {
  let box: Contract;

  beforeEach(async function () {
    const Box = await ethers.getContractFactory("Box")
    box = await Box.deploy()
    await box.waitForDeployment()
  })

  it("should retrieve value previously stored", async function () {
    await box.store(42)
    expect(await box.retrieve()).to.equal(42n)

    await box.store(100)
    expect(await box.retrieve()).to.equal(100n)
  })
})

// NOTE: should also add test for event: event ValueChanged(uint256 newValue)
