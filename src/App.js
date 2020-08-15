import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navBar';
import Home from './components/home';
import About from './components/about';
import Link from './components/link';

function App() {
  return (
    <Router>
      <div className="appBody">
        <Header/>
        <Navbar/>
        <Switch>
          <Route path='/home'><Home/></Route>
          <Route path='/link'><Link/></Route>
          <Route path='/about'><About/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
