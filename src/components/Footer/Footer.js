import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="container is-fullhd">
            <div class="columns">
                <div class="column">
                    First column
                </div>
                <div class="column">
                    Second column
                </div>
                <div class="column">
                    Third column
                </div>
                <div class="column">
                    Fourth column
                </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer;