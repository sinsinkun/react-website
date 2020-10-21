import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Demos from './components/Demos';

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
          <Navbar currentPage={this.state.currentPage}/>
          <Header currentPage={this.state.currentPage}/>
          <Switch>
            <Route exact path='/'><Home updatePage={this.updatePage}/></Route>
            <Route path='/demos'><Demos updatePage={this.updatePage}/></Route>
            <Route path='/about'><About updatePage={this.updatePage}/></Route>
          </Switch>
          <div style={{height:'30px'}} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
