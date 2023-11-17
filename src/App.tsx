// src/App.tsx
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

const App: React.FC = () => {
  return (
    <div className='main-container'> 
    <Router>
      <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/profile' element={<Profile/>} />
      {/* <Route path='/' element={<Login/>} /> */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;


