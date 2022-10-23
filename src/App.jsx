import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Blog from './components/Blog';
import NewBlog from './components/NewBlog'
import Projects from './components/Projects';
import Links from './components/Links';
import { AppProvider } from './utilities/AppContext';


function App() {

  const [currentPage, setCurrentPage] = useState('');
  const [flipped, setFlipped] = useState(false);


  const initialContext = {
    currentPage, setCurrentPage,
    flipped, setFlipped
  }

  return (
    <div className="App">
      <Router>
        <AppProvider value={initialContext}>
          <Nav />

          <Switch>

            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/bootcamp-blog">
              <Blog />
            </Route>
            <Route path="/postwork-blog">
              <NewBlog />
            </Route>
          </Switch>

        </AppProvider>
      </Router>
    </div>
  )
}

export default App;
