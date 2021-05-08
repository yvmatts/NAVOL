import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import React, { useState } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import Academics from './Pages/Academics/Academics';
import Exam from './Pages/Exam/Exam';
import Profile from './Pages/Profile/Profile';

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
            {isLoggedIn && <Dashboard isLoggedIn = {isLoggedIn} />}
          </Route>
          <Route path="/academics">
            {isLoggedIn && <Academics isLoggedIn = {isLoggedIn} />}
          </Route>
          <Route path="/exam">
            {isLoggedIn && <Exam isLoggedIn = {isLoggedIn} />}
          </Route>
          <Route path="/profile">
            {isLoggedIn && <Profile isLoggedIn = {isLoggedIn} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
