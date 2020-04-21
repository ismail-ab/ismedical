import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Doctors from "./components/DoctorsList";
import DoctorSheet from "./components/DoctorSheet";
import "./App.css";

const App: React.SFC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/doctors">
            <Doctors />
          </Route>
          <Route exact path="/doctors/:doctorid">
            <DoctorSheet />
          </Route>
          <Route>
            <h2>404 - Page not found !</h2>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
