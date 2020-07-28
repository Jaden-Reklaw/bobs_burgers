import React, {Component} from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

//Import pages 
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import About from '../pages/About/About';

class Navigation extends Component {
  render() {
    return (
        <Router>
            <nav class="navbar" role="navigation" aria-label="main navigation">
            <Route exact path='/' component={Home}/>
            <Route path='/menu' component={Menu}/>
            <Route path='/about' component={About}/>
        
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            <Link to='/'>Home</Link>
                        </a>

                        <a class="navbar-item">
                            <Link to='/menu'>Menu</Link>
                        </a>

                        <a class="navbar-item">
                            <Link to='/about'>About</Link>
                        </a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>
                        </div>
                    </div>
                </div>

                
                
            </nav>
        </Router>
    )
  }
}

export default Navigation;