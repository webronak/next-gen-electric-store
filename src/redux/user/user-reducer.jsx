const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case "SIGNIN_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    case 'SUCCESS_SIGN_OUT':
        return {
            ...state,
            currentUser: action.payload,
            error: null,
          };
    default:
      return state;
  }
};

export default userReducer;
