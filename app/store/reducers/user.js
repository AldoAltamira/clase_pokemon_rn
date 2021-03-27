const initialState = {
  currentUser: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, currentUser: action.payload};
    case 'LOG_OUT':
      return {...state, currentUser: initialState.currentUser};
  }
  return {...state};
};

export default userReducer;
