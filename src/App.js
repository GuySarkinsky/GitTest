import React, { useEffect, Suspense } from "react";
import { connect } from "react-redux";
import * as actionType from "./store/actions";
import axios from "./axios-rls";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import MySpinner from "./components/hoc/Spinner";
import NotFoundPage from "./components/pageError/NotFoundPage"; // Test  :)
import NavBar from "./components/navbar/NavBar";

const Landing = React.lazy(() => import("./components/landing/Landing"));

const App = props => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route
            render={({ location }) => (
              <Suspense fallback={<MySpinner />}>
                <Switch location={location}>
                  <Route path="/" exact component={Landing} />{" "}
                </Switch>{" "}
              </Suspense>
            )}
          />{" "}
        </div>{" "}
      </BrowserRouter>{" "}
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
