import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfilio from './components/pages/Portfolio';
import Header from './components/Header';

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
    </React.StrictMode>
  )
}

export default App;
