export enum ActionType {
  IncrementId = "counter/increment",
  DecrementId = "counter/decrement",
  SetChangeValue = "value/change/set",
}

interface IIncrementId {
  type: ActionType.IncrementId;
}

interface IDecrementId {
  type: ActionType.DecrementId;
}

interface ISetChangeValue {
  type: ActionType.SetChangeValue;
  payload: number;
}

export type CountAction = IIncrementId | IDecrementId | ISetChangeValue;

export const IncrementId = (): IIncrementId => ({
  type: ActionType.IncrementId,
});

export const DecrementId = (): IDecrementId => ({
  type: ActionType.DecrementId,
});

export const SetChangeValue = (value: number): ISetChangeValue => ({
  type: ActionType.SetChangeValue,
  payload: value,
});
