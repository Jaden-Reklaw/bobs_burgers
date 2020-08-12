import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
  render() {
    console.log(this.props.title);
    return (
        <div className="column is-one-third">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={this.props.img_path} alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{this.props.title}</p>
                    </div>
                    </div>

                    <div className="content container">
                        <p>{this.props.description}</p><br />
                        <button className="button">{this.props.btn}</button>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}

export default Card;