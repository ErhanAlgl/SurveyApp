const initialState = {
  userSession: null,
  username: null,
  isAuthloading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_SESSION':
      return {
        ...state,
        userSession: action.payload,
      };
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'SET_AUTH_LOADING':
      return {
        ...state,
        isAuthloading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
