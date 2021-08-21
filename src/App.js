import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import { Switch, Redirect, Route } from "react-router";
import Ubl from "./components/Ubl";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import KeyFeature from "./components/KeyFeature";
import Featurelist from "./components/FeatureList";

const App = () => {
  const [show, setShow] = useState(false);
  const [featureData, setFeatureData] = useState(Featurelist);
  const [contact, setContact] = useState(true);
  return (
    <>
      <Navbar show={show} setShow={setShow} />
      <Switch>
        <Route exact path="/">
          <Header show={show} setShow={setShow}></Header>
          <About></About>
          <KeyFeature
            featureData={featureData}
            setFeatureData={setFeatureData}
          ></KeyFeature>
          <Footer contact={contact} setContact={setContact}></Footer>
        </Route>
        <Route exact path="/unsecure-business-loan">
          <Ubl></Ubl>
          <Footer></Footer>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
};

export default App;
