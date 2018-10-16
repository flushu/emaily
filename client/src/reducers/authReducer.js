const defaultState = {};

export default (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};
