import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
            {/* Main Footer*/}
            <div className="columns">
                <div className="column">
                    <h2 className="header2">About Us</h2>
                    <ul>
                        <li><a href="/">Our History</a></li>
                        <li><a href="/">Leadership Team</a></li>
                        <li><a href="/">Our History</a></li>
                        <li><a href="/">News & Notifications</a></li>
                        <li><a  href="/">Website Dev Team</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h2 className="header2">Careers</h2>
                </div>
                <div className="column">
                    <h2 className="header2">Services</h2>
                </div>
                <div className="column">
                    <h2 className="header2">Contact US</h2>
                </div>
            </div>
            {/* Sub Footer A Social Links */}
            <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
            <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
            <i className="fa fa-youtube-play fa-3x" aria-hidden="true"></i>
            <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
            <i className="fa fa-tumblr-square fa-3x" aria-hidden="true"></i>
            <i className="fa fa-spotify fa-3x" aria-hidden="true"></i>
            <hr />

            {/* Sub Footer B Legal*/}
            <div className="columns is-mobile">
                <div className="column">
                    <a href="/">Privacy</a>
                </div>
                <div className="column">
                    <a href="/">Terms and Conditions</a>
                </div>
                <div className="column">
                    <a href="/">Accessibility</a>
                </div>
                <div className="column">
                    Fourth column
                </div>
            </div>
            <p>© 2020</p>
      </footer>
    )
  }
}

export default Footer;