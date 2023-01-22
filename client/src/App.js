<<<<<<< HEAD
import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { useDispatch } from "react-redux";
import { getAbout } from "./actions/about";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  return (
    <>
      <Dashboard />
=======
import React from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <LandingPage />
      </GlobalProvider>
>>>>>>> 68478385d881e7e8668c28b4b99bf97d3d7f0ac6
    </>
  );
}

export default App;
