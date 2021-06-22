import { useReducer } from "react";

const CouterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: action.payload + 1,
      };

    case "DECREMENT":
      return {
        count: action.payload - 1,
      };
    default:
      return state;
  }
};
export default CouterReducer;
