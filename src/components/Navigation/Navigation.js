import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="./images/BB_logo.png" width="112" height="28" />
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
                    <Link to='/episodes'>Episodes</Link>
                </a>
                <a class="navbar-item">
                    <Link to='/employees'>Employees</Link>
                </a>
                <a class="navbar-item">
                    <Link to='/about'>About</Link>
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Our Menu
                    </a>

                    {/* Menu Dropdown */}
                    <div class="navbar-dropdown">
                    <a class="navbar-item">
                        <Link to='/menu/breakfast'>Breakfast</Link>
                    </a>
                    <a class="navbar-item">
                        <Link to='/menu/lunch'>Lunch</Link>
                    </a>
                    <a class="navbar-item">
                        <Link to='/menu/dinner'>Dinner</Link>
                    </a>
                    <a class="navbar-item">
                        <Link to='/menu/deals'>Deals</Link>
                    </a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item">
                        Burger Of The Day
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navigation;