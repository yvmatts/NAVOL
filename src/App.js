import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import React, { useState } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        <NavBar isLoggedIn = {isLoggedIn} />
        <Switch>
          <Route exact path = "/">
            {!isLoggedIn && <LoginPage isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />}
          </Route>
          <Route path = "/dashboard">
            {isLoggedIn && <Dashboard isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
