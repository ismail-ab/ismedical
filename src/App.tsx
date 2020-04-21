import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeContainer from "./components/HomeContainer";
import DoctorsListContainer from "./components/DoctorsListContainer";
import DoctorSheetContainer from "./components/DoctorSheetContainer";
import "./App.css";

const App: React.SFC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route exact path="/doctors">
            <DoctorsListContainer />
          </Route>
          <Route exact path="/doctors/:doctorid">
            <DoctorSheetContainer />
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
