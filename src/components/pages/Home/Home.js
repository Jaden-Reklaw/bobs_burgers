import React, {Component} from 'react';
import './Home.css';

//Import components to be used on this page
import Hero from '../../Hero/Hero';
import BurgerOfDay from '../../Hero/BurgerOfDay';
import CastHero from '../../Hero/CastHero';

class Home extends Component {
  render() {
    return (
      <div className="body">
        <Hero />
        <BurgerOfDay />
        <CastHero />
      </div>
    )
  }
}

export default Home;