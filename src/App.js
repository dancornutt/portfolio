import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfilio from './components/pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <React.StrictMode>
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" component={About} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfilio} />
              <Route path="/contact" component={Contact} />
          </Switch>
      </Router>
      <Footer/>
    </React.StrictMode>
  )
}

export default App;
