import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage';
import React from 'react';
import Dashboard from './Pages/Dashboard';
import Academics from './Pages/Academics';
import Exam from './Pages/Exam';
import Profile from './Pages/Profile';
import store from 'Redux/store';


function App() {
  return (
    <div className="app-container"> 
      <Router>
        <Provider store={store}>     
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
        </Provider>  
      </Router>
    </div>
  );
}

export default App;
