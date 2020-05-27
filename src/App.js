import React from "react";
import Header from "./Component/Header";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Component/Landing";
import Episode from "./Component/Episode";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/episode" component={Episode} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
