import React from "react";

import Tracker from "./components/Tracker";
import Login from "./components/Login";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <NavBar />

      <Switch>
        <Route path="/" exact component={Tracker} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
