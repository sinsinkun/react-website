import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Home from './components/Home';
import Demos from './components/Demos';
import Projects from './components/Projects';
import About from './components/About';
import { StoreProvider } from './components/GlobalStore';
import './components/style.css';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <div className="container-max">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/demos"><Demos /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/about"><About /></Route>
            <Route><Page404 /></Route>
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
