import React from 'react';

//Import Components
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

import { HashRouter as Router, Route } from 'react-router-dom';

//Import pages 
import Home from '../components/pages/Home/Home';
import Menu from '../components/pages/Menu/Menu';
import About from '../components/pages/About/About';
import Employees from '../components/pages/Employees/Employees';

//Needed to activate Bulma on the project
//After npm install
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <br />
        <div class="container">
          <Route exact path='/' component={Home}/>
          <Route path='/menu' component={Menu}/>
          <Route path='/about' component={About}/>
          <Route path='/employees' component={Employees}/>
        </div>
        <div className="buffer"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
