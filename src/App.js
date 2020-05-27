import React from "react";
import Header from "./Component/Header";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Landing from "./Component/Landing";
import Episode from "./Component/Episode";
import store from "./Redux/store";
import "./App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/episode">
              <Episode />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
