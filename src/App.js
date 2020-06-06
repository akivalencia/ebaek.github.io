import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import MoreAbout from './components/moreAbout.jsx';
import Projects from './components/projects.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path="/about">
              <MoreAbout />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/">
              <About />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
