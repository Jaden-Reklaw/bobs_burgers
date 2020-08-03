import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="./images/BB_logo.png" alt="Bob's Burger Logo" width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                
                    <Link className="navbar-item" to='/'>Home</Link>
                    <Link className="navbar-item" to='/episodes'>Episodes</Link>
                    <Link className="navbar-item"to='/employees'>Employees</Link>
                    <Link className="navbar-item" to='/about'>About</Link>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        Our Menu
                    </a>

                    {/* Menu Dropdown */}
                    <div className="navbar-dropdown">
                        <Link className="navbar-item" to='/menu/breakfast'>Breakfast</Link>
                        <Link className="navbar-item" to='/menu/lunch'>Lunch</Link>
                        <Link className="navbar-item" to='/menu/dinner'>Dinner</Link>
                        <Link className="navbar-item" to='/menu/deals'>Deals</Link>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
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