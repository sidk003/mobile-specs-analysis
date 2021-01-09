import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Apple } from "./components/CompanyPages/Apple/Apple";
import { Google } from "./components/CompanyPages/Google/Google";
import { Huawei } from "./components/CompanyPages/Huawei/Huawei";
import { Oneplus } from "./components/CompanyPages/Oneplus/Oneplus";
import { Samsung } from "./components/CompanyPages/Samsung/Samsung";
import { Xiaomi } from "./components/CompanyPages/Xiaomi/Xiaomi";

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/apple" component={Apple} />
            <Route path="/google" component={Google} />
            <Route path="/huawei" component={Huawei} />
            <Route path="/oneplus" component={Oneplus} />
            <Route path="/samsung" component={Samsung} />
            <Route path="/xiaomi" component={Xiaomi} />
          </Switch>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
