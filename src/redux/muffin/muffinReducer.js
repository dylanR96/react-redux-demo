import { BUY_MUFFIN } from "./muffinTypes";

const initialState = {
  numOfMuffins: 50,
};

const muffinReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MUFFIN:
      return {
        ...state,
        numOfMuffins: state.numOfMuffins - 2,
      };
    default:
      return state;
  }
};

export default muffinReducer;
