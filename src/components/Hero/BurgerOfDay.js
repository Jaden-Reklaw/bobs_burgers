import React, { Component } from 'react';

//
const d = new Date();
let todaysDate = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;

class BurgerOfDay extends Component {
    render() {
        return (
            <section className="hero is-medium">
                <div className="hero-body medium-hero">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-two-thirds">
                            <figure className="image is-5by3">
                                <img src="https://bulma.io/images/placeholders/800x480.png" />
                            </figure>
                            </div>
                            <div className="column">
                                <h1 className="title">
                                    Burger of The Day
                                </h1>
                                <h2>
                                    Date: {todaysDate}
                                </h2>
                                <h2 className="subtitle">
                                    Name of Burger
                                </h2>
                                <p>Description</p>
                                <br />
                                <button class="button is-danger is-hovered">More Info ...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BurgerOfDay;