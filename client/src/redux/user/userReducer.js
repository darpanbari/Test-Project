const initialState = {
  isAuthenticated: false,
  user: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        user: null,
        error: action.payload,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        user: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
