import './App.css';
import AppBar from './Components/AppBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import React, { useState } from 'react';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <AppBar isLoggedIn = {isLoggedIn} />
      {!isLoggedIn && <LoginPage isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />}
      {isLoggedIn && <HomePage />}
    </div>
  );
}

export default App;
