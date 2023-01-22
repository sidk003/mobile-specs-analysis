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
    </>
  );
}

export default App;
