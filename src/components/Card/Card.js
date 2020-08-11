import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
        <div className='column is-one-quarter'>
            <div className='card equal-height'>
                <div className='card-content is-flex is-horizontal-center'>
                    <figure className='image'>
                        <img src='https://unsplash.it/64' alt="cards"/>
                    </figure>
                    
                </div>
                <div className="container">
                    <div className="notification">
                        <h1>Hello World</h1>
                        <h2>Description</h2>
                        <button className="button is-primary">Click</button>
                    </div>
                </div>
            </div>
        </div>
         
    )
  }
}

export default Card;