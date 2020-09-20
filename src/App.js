import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Link from './components/Link';

class App extends Component {

  state = {
    currentPage: 'home'
  }

  updatePage = (newPage) => {
    this.setState({currentPage:newPage});
  }

  render () { 
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="appBody">
          <Header currentPage={this.state.currentPage}/>
          <Navbar currentPage={this.state.currentPage}/>
          <Switch>
            <Route exact path='/'><Home updatePage={this.updatePage}/></Route>
            <Route path='/link'><Link updatePage={this.updatePage}/></Route>
            <Route path='/about'><About updatePage={this.updatePage}/></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
