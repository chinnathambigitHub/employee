import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './components/Home'; 
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);

reportWebVitals();
