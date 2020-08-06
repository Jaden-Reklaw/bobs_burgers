import React, {Component} from 'react';
import './HScrollMenu.css';
import Card from '../Card/Card';

class HScrollMenu extends Component {
  render() {
    return (
      <div class="scrollmenu">
        <div class="columns">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }
}

export default HScrollMenu;