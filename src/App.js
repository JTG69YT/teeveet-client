import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";
import Channel from "./components/Channel";

import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <AuthProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/play-channel" component={Channel} />
        <PrivateRoute exact path="/account" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AuthProvider>
  </Router>
);

export default App;
