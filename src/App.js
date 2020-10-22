import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HeaderBar } from "./components/headerbar/headerbar";
import { NavBar } from "./components/navbar/navbar";
import {Footer} from "./components/footer/footer"
import { About } from "./components/main/about";

function App() {
  return (
    <div className="mainDiv" id="mainDiv">
      <HeaderBar />
      <NavBar />
      <div className="contentBackground">
        <Switch>
          <Route exact path="/" component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
