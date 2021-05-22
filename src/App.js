import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import React, { useState } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import Academics from './Pages/Academics/Academics';
import Exam from './Pages/Exam/Exam';
import Profile from './Pages/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container"> 
      <Router>
        <NavBar isLoggedIn = {isLoggedIn} />
        <div>
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
        </div>
      </Router>
    </div>
  );
}

export default App;
