import * as api from "../api";

// action creators
export const getAbout = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAboutContent();
    dispatch({ type: "FETCH_ALL", payload: [] });
  } catch (error) {
    console.log(error.message);
  }
};
