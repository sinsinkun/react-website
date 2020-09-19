import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navBar';
import Home from './components/home';
import About from './components/about';
import Link from './components/link';

class App extends Component {

  state = {
    currentPage: 'home'
  }

  updatePage = (newPage) => {
    this.setState({currentPage:newPage});
  }

  render () { 
    return (
      <Router>
        <div className="appBody">
          <Header currentPage={this.state.currentPage}/>
          <Navbar currentPage={this.state.currentPage}/>
          <Switch>
            <Route exact path='/'><Home updatePage={this.updatePage}/></Route>
            <Route path='/link'><Link updatePage={this.updatePage}/></Route>
            <Route path='/about'><About updatePage={this.updatePage}/></Route>
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;
