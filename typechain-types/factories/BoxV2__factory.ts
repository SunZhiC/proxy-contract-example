/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { BoxV2, BoxV2Interface } from "../BoxV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610131806100206000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80632e64cec11460415780636057361d146056578063d09de08a146067575b600080fd5b60005460405190815260200160405180910390f35b6065606136600460bd565b606d565b005b606560a8565b60008190556040518181527f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c599060200160405180910390a150565b60bb60b260005490565b606190600160d5565b565b60006020828403121560ce57600080fd5b5035919050565b8082018082111560f557634e487b7160e01b600052601160045260246000fd5b9291505056fea264697066735822122085116df10af2462773e74ecde265b208dbfe16533156650cf8ab43b51045296364736f6c63430008180033";

type BoxV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoxV2__factory extends ContractFactory {
  constructor(...args: BoxV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BoxV2 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BoxV2__factory {
    return super.connect(runner) as BoxV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxV2Interface {
    return new Interface(_abi) as BoxV2Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): BoxV2 {
    return new Contract(address, _abi, runner) as unknown as BoxV2;
  }
}
