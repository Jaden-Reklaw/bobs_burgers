import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container is-fullhd">
            <div className="columns">
                <div className="column">
                    <h3>About Us</h3>
                    <ul>
                        <li><a>Our History</a></li>
                        <li><a>Leadership Team</a></li>
                        <li><a>Our History</a></li>
                        <li><a>News & Notifications</a></li>
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
            <hr />
            
        </div>
      </footer>
    )
  }
}

export default Footer;