import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home, Reporter } from './views/'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home />
        </Route>
        <Route exact path="/reporter/:country?">
           <Reporter />
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
