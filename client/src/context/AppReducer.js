// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case "GET_ABOUT":
      return {
        loading: false,
        about: action.payload,
      };

    case "ADD_ABOUT":
      return {
        about: [action.payload],
      };

    case "ABOUT_ERROR":
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
