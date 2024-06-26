/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Box",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Box__factory>;
    getContractFactory(
      name: "BoxV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoxV2__factory>;
    getContractFactory(
      name: "BoxV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoxV3__factory>;
    getContractFactory(
      name: "BoxV4",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoxV4__factory>;

    getContractAt(
      name: "Box",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Box>;
    getContractAt(
      name: "BoxV2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BoxV2>;
    getContractAt(
      name: "BoxV3",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BoxV3>;
    getContractAt(
      name: "BoxV4",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BoxV4>;

    deployContract(
      name: "Box",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Box>;
    deployContract(
      name: "BoxV2",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BoxV2>;
    deployContract(
      name: "BoxV3",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BoxV3>;
    deployContract(
      name: "BoxV4",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BoxV4>;

    deployContract(
      name: "Box",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Box>;
    deployContract(
      name: "BoxV2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BoxV2>;
    deployContract(
      name: "BoxV3",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BoxV3>;
    deployContract(
      name: "BoxV4",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BoxV4>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
