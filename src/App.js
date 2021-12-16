import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./page/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
