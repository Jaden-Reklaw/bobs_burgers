import React, {Component} from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <section className="hero is-primary is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Welcome to Bob's Burgers!
            </h1>
            <h2 className="subtitle">
              Come meet our family and let us meat you!
            </h2>
            <button class="button is-danger is-hovered">What's New</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;