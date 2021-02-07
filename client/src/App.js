import React from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
// import { FirstPage } from "./components/FirstPage/FirstPage";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <LandingPage />
        {/* <FirstPage /> */}
      </GlobalProvider>
    </>
  );
}

export default App;
