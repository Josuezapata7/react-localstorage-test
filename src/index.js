import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Quitar React.StrictMode para poder usar localStorage, esto por que da problemas con useEffect
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
