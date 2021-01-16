import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  about: [],
  apple: [],
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
      const res = await axios.get("/api/v1/");
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
      const res = await axios.post("/api/v1/", about, config);

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

  // Apple
  async function getApple() {
    try {
      const res = await axios.get("/api/v1/apple");
      dispatch({
        type: "GET_APPLE",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "APPLE_ERROR",
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
        apple: state.apple,
        getApple,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
