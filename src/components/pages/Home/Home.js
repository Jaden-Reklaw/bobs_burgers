import React, {Component} from 'react';
import './Home.css';

//Import components to be used on this page
import Hero from '../../Hero/Hero';

class Home extends Component {
  render() {
    return (
      <div className="body">
        <h1>Home</h1>
        <Hero />
      </div>
    )
  }
}

export default Home;