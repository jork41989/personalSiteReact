import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HeaderBar } from "./components/headerbar/headerbar";
import { NavBar } from "./components/navbar/navbar";
import {Footer} from "./components/footer/footer"
import { About } from "./components/main/about";
import { Projects } from "./components/main/projects";
import { Skills } from "./components/main/skills";
import { Resume } from "./components/main/resume";
import { ChatBar } from "./components/chatBar/chatBar";
import { ErrorPage } from "./components/errorPage/errorPage";

function App() {

  return (
    <div className="mainDiv" id="mainDiv">
      <HeaderBar />
      <NavBar />
      <div className="contentBackground">
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/resume" component={Resume} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>

      <ChatBar />
    </div>
  );
}

export default App;
