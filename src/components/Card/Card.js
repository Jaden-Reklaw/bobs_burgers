import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
        <div class='column is-one-quarter'>
            <div class='card equal-height'>
                <div class='card-content is-flex is-horizontal-center'>
                    <figure class='image'>
                        <img src='https://unsplash.it/64' />
                    </figure>
                    
                </div>
                <div class="container">
                    <div class="notification">
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