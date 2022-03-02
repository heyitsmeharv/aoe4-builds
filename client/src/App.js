import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import './App.css';

import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Routes>
    </Router>
  );
}

export default App;