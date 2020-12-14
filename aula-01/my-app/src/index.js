import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import './index.css';

import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{ color: 'red' }}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeStyle={{color:'magenta'}}>Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
