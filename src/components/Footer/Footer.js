import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
            {/* Main Footer*/}
            <div className="columns">
                <div className="column">
                    <h3>About Us</h3>
                    <ul>
                        <li><a>Our History</a></li>
                        <li><a>Leadership Team</a></li>
                        <li><a>Our History</a></li>
                        <li><a>News & Notifications</a></li>
                        <li><a>Website Dev Team</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Careers</h3>
                </div>
                <div className="column">
                    <h3>Services</h3>
                </div>
                <div className="column">
                    <h3>Contact US</h3>
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
                    <a>Privacy</a>
                </div>
                <div className="column">
                    <a>Terms and Conditions</a>
                </div>
                <div className="column">
                    <a>Accessibility</a>
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