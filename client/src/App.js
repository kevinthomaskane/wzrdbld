import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/admin/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
