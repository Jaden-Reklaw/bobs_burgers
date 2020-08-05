import React, {Component} from 'react';
import './Home.css';

//Import components to be used on this page
import Hero from '../../Hero/Hero';
import BurgerOfDay from '../../BurgerOfDay/BurgerOfDay';

class Home extends Component {
  render() {
    return (
      <div className="body">
        <Hero />
        <BurgerOfDay />
      </div>
    )
  }
}

export default Home;