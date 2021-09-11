import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';


function App() {
  return (
    //These are basically routes to different types of pages
    <Router>
      <div className="app">
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App
