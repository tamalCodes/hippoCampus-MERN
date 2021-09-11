import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import NotePage from './Components/NotePage';


function App() {
  return (
    //These are basically routes to different types of pages
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <NotePage></NotePage>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App
