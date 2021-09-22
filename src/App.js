import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Notes from './Components/Notes';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {

  return (

    //These are basically routes to different types of pages
    <NoteState>
      <Router>
        <Navbar />
        <Switch>

          {/* path 1 */}
          <Route exact path="/"> <Landing /> </Route>

          {/* path 2*/}
          <Route exact path="/about"> <About /></Route>

          {/* path 3 */}
          <Route exact path="/notes" ><Notes /> </Route>

          {/* path 3 */}
          <Route exact path="/login" ><Login /> </Route>

          {/* path 3 */}
          <Route exact path="/signup" ><Register /> </Route>

        </Switch>

      </Router>
    </NoteState>
  );
}

export default App
