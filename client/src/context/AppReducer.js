export default (state, action) => {
  switch (action.type) {
    case "GET_ABOUT":
      return {
        ...state,
        loading: false,
        about: action.payload,
      };

    case "ADD_ABOUT":
      return {
        ...state,
        about: [...state.about, action.payload],
      };

    case "ABOUT_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
