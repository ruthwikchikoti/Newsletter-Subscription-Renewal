import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
