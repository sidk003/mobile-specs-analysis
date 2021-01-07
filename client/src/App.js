import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Dashboard />
      </GlobalProvider>
    </>
  );
}

export default App;
