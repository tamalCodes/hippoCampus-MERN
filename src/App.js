import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import Navbar from './Components/Navbar';


function App() {

  return (

    //These are basically routes to different types of pages
    <NoteState>
      <Router>
        <Navbar />
        <Switch>

          {/* path 1 */}
          <Route exact path="/"> <Home /></Route>

          {/* path 2*/}
          <Route exact path="/about"> <About /></Route>

          {/* path 3 */}
          <Route exact path="/contact" ><Contact /></Route>

        </Switch>

      </Router>
    </NoteState>
  );
}

export default App
