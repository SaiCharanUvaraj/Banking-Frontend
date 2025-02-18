import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NewAccount from './pages/NewAccount';
import Accounts from './pages/Accounts';
import ApplyAccount from './pages/ApplyAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/newAccount" element={<NewAccount />} />
        <Route path="/applyAccount" element={<ApplyAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
    </Router>
  );
};

export default App;
