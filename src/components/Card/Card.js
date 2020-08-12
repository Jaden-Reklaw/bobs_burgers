import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
        <div className="column is-one-third">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-content">
                        <p className="title is-4">Card Title</p>
                        <p className="subtitle is-6">Card Sub Title</p>
                        
                    </div>
                    </div>

                    <div className="content container">
                    <p>Description Goes Here</p><br />
                    </div>
                </div>
            </div>

        </div>
    )
  }
}

export default Card;