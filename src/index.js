import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./style.css";
// import "./components/skill.css";
// import "./components/resume.css";

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

