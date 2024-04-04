// App.js
/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Signup from './signup';
import TodoList from './TodoList';
import PrivateRoute from './PrivateRoute';
import useAuthentication from './useAuthentication';

const App = () => {
  const { isAuthenticated, login } = useAuthentication();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/todolist" element={<TodoList />} isAuthenticated={isAuthenticated} />
      </Routes>
    </Router>
  );
};

export default App;
*/
// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; // Assuming you have a Home component
import Login from './login';
import Signup from './signup';
import TodoList from './TodoList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
