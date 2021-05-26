import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import React from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import Academics from './Pages/Academics/Academics';
import Exam from './Pages/Exam/Exam';
import Profile from './Pages/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContextProvider from 'Context/AppContext';

function App() {
  return (
    <div className="app-container"> 
      <Router>
        <AppContextProvider>
            <NavBar />
            <div>
              <Switch>
                <Route exact path = "/">
                  <LoginPage />
                </Route>
                <Route path = "/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/academics">
                  <Academics />
                </Route>
                <Route path="/exam">
                   <Exam />
                </Route>
                <Route path="/profile">
                   <Profile />
                </Route>
              </Switch>
            </div>
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
