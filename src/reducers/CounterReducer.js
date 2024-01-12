const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };
    default:
      return state;
  } //end switch
}; //end CounterReducer

export default CounterReducer;
