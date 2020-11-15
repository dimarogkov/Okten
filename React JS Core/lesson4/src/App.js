import './App.css';
import React from "react"
import {NavLink} from "react-router-dom";
import Routes from './routes';

function App() {
  return (
    <div>
      <nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        <NavLink to='/comments'>Comments</NavLink>
      </nav>

      <Routes/>
    </div>
  );
}

export default App;
