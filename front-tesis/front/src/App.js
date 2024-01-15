import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponents';  

const App = () => {
  return (
    <Router>
      <LoginComponent/>
    </Router>
  );
};

export default App;
