import React, {Component} from 'react';
import './HScrollMenu.css';
import Card from '../Card/Card';

class HScrollMenu extends Component {
  render() {
    return (
      <div className="scrollmenu">
        <div className="columns">
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