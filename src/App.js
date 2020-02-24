import React from 'react';
import './App.css'
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import { Provider } from 'react-redux';
import shiduchReducer from '../src/myRedux/Combine'

class MainApp extends React.Component {
  render() {
    
    return(
    <Provider store={shiduchReducer}>
      <div>
        <Router >
          <div className="myNavbar">
            <Link className="partOfNavBar" to="/Home">בית</Link>
            <Link className="partOfNavBar" to="/about">אודות</Link>
          </div>



          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>

          </Switch>
        </Router>
      </div>
    </Provider>
    )

  }
}

export default MainApp;