import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "../components/auth/Register";

// Redux
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/authActions";
import setAuthToken from "../utils/setAuthToken";

import "../App.css";
import Navbar from "./layout/Navbar";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/register" component={Register} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
