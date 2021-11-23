import { ActionType, CountAction } from "../actions/count";
import { ICountState } from "../context/count";

const countReducer = (state: ICountState, action: CountAction) => {
  const { id: count, changeValue } = state;
  switch (action.type) {
    case ActionType.IncrementId:
      return {
        ...state,
        id: count + changeValue,
      };
    case ActionType.DecrementId:
      return {
        ...state,
        id: count - changeValue,
      };
    case ActionType.SetChangeValue:
      return {
        ...state,
        changeValue: action.payload,
      };
    default:
      return state;
  }
};

export { countReducer };
