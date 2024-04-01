/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface BoxV3Interface extends Interface {
  getFunction(
    nameOrSignature: "increment" | "name" | "retrieve" | "setName" | "store"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NameChanged" | "ValueChanged"
  ): EventFragment;

  encodeFunctionData(functionFragment: "increment", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "retrieve", values?: undefined): string;
  encodeFunctionData(functionFragment: "setName", values: [string]): string;
  encodeFunctionData(functionFragment: "store", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "retrieve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
}

export namespace NameChangedEvent {
  export type InputTuple = [name: string];
  export type OutputTuple = [name: string];
  export interface OutputObject {
    name: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ValueChangedEvent {
  export type InputTuple = [newValue: BigNumberish];
  export type OutputTuple = [newValue: bigint];
  export interface OutputObject {
    newValue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BoxV3 extends BaseContract {
  connect(runner?: ContractRunner | null): BoxV3;
  waitForDeployment(): Promise<this>;

  interface: BoxV3Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  increment: TypedContractMethod<[], [void], "nonpayable">;

  name: TypedContractMethod<[], [string], "view">;

  retrieve: TypedContractMethod<[], [bigint], "view">;

  setName: TypedContractMethod<[_name: string], [void], "nonpayable">;

  store: TypedContractMethod<[newValue: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "increment"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "retrieve"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setName"
  ): TypedContractMethod<[_name: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "store"
  ): TypedContractMethod<[newValue: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "NameChanged"
  ): TypedContractEvent<
    NameChangedEvent.InputTuple,
    NameChangedEvent.OutputTuple,
    NameChangedEvent.OutputObject
  >;
  getEvent(
    key: "ValueChanged"
  ): TypedContractEvent<
    ValueChangedEvent.InputTuple,
    ValueChangedEvent.OutputTuple,
    ValueChangedEvent.OutputObject
  >;

  filters: {
    "NameChanged(string)": TypedContractEvent<
      NameChangedEvent.InputTuple,
      NameChangedEvent.OutputTuple,
      NameChangedEvent.OutputObject
    >;
    NameChanged: TypedContractEvent<
      NameChangedEvent.InputTuple,
      NameChangedEvent.OutputTuple,
      NameChangedEvent.OutputObject
    >;

    "ValueChanged(uint256)": TypedContractEvent<
      ValueChangedEvent.InputTuple,
      ValueChangedEvent.OutputTuple,
      ValueChangedEvent.OutputObject
    >;
    ValueChanged: TypedContractEvent<
      ValueChangedEvent.InputTuple,
      ValueChangedEvent.OutputTuple,
      ValueChangedEvent.OutputObject
    >;
  };
}
