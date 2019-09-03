import React from "react";
import { Switch, Route, Redirect } from "react-reuter-dom";
import AppBar from "./AppBar";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
      <AppBar />
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
