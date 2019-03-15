import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Favs from "./components/favs";
import Navegacion from "./components/navegacion";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navegacion />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/favs" component={Favs} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
