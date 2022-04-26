import React from 'react';
import logo from './logo.svg';
import Menu from './features/menu/Menu';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useParams, useNavigate } from "react-router-dom";
import WelcomePage from './features/WelcomePage';

function App() {

  
  return (
    <div className="App">
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="items/:page" element={<Menu/>} />
        </Routes>
      </Router>
      
      </div>
    </div>
  );
}

export default App;
