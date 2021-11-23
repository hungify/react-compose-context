import { CountAction, CountState } from "../context/count";

export function countReducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "counter/decrement": {
      return { ...state, count: state.count - state.changeValue! };
    }
    case "counter/increment": {
      return { ...state, count: state.count + state.changeValue! };
    }
    case "value/change/set": {
      return { ...state, changeValue: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}
