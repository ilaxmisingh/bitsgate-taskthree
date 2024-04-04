/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root(
 // <React.StrictMode>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
/*
import React from 'react';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Home from './home'; // 

  function root(){
    return (
  <div>
    <Routes>
      <Route path = '/'>element ={<Home />}</Route>
      <Route path = '/login'>element={<Login />}</Route>
      <Route path = '/signup'>element={<Signup/>}</Route>
    </Routes>
  </div>
);
    }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
// index.js

// index.js

// index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
