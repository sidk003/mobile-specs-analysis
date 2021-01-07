import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  about: ["About-me", "Sid"],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getAbout() {
    try {
      const res = await axios.get("/");

      dispatch({
        type: "GET_ABOUT",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "ABOUT_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addAbout(about) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/", about, config);

      dispatch({
        type: "ADD_ABOUT",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "ABOUT_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        getAbout,
        error: state.error,
        loading: state.loading,
        about: state.about,
        addAbout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
