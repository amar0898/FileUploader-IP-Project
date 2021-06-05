import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from './SignUp';
ReactDOM.render(
  <BrowserRouter>
  <Switch>
    
   <Route exact path="/" component={Login} />
   <Route path="/App" component={App} />
   <Route path="/SignUp" component={SignUp} />
 </Switch>
 </BrowserRouter>
 
 ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
