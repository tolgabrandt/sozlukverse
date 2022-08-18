export const authReducer = ( state, action ) => {
  switch(action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
    }
}