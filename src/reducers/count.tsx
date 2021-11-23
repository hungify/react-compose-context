import { CountAction, CountState } from "../context/count";

export function countReducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "decrement": {
      return { count: state.count - 1 };
    }
    case "increment": {
      return { count: state.count + 1 };
    }
    default: {
      return state;
      // throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
