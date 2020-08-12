import React, {Component} from 'react';
import './HScrollMenu.css';
import CardList from '../CardList/CardList';

class HScrollMenu extends Component {
  render() {
    return (
      <div className="scrollmenu">
          <CardList />
      </div>
    )
  }
}

export default HScrollMenu;