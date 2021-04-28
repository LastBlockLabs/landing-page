import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import Message from "./pages/Message";
import ToS from "./pages/ToS";

const Router = () => {
  return (
    <Switch>
      <HashRouter basename="/">
        <Route path={"/"} component={LandingPage} />
        {/* <Route path={"/"} component={Message} /> */}
        {/* <Route exact path={"/token"} component={TokenPage} /> */}
        <Route exact path={"/tos"} component={ToS} />
      </HashRouter>
    </Switch>
  );
};

export default Router;
