export const initialState = {
  count: 0,
};

export const countReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return {
        count: state.count + 1,
      };
    case "dec":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};
