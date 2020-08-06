import React, { Component } from 'react';

//
const d = new Date();
let todaysDate = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;

class CastHero extends Component {
    render() {
        return (
            <section className="hero is-medium">
                <div className="hero-body medium-hero">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h1 className="title">
                                    Meet the Employees
                                </h1>
                                <h2>
                                    Creator: <a href="https://www.imdb.com/name/nm0098908/">Loren Bouchard</a>
                                </h2>
                                <h2 className="subtitle">
                                    Cast
                                </h2>
                                <p>
                                    Get to know more about the cast of Bob's Burger. Who are the Belcher's?
                                    Who does the voices and why does Tina have an obsession with zombie butt?

                                </p>
                                <br />
                                <button class="button is-danger is-hovered">More Info ...</button>
                            </div>
                            <div className="column is-two-thirds">
                                <figure className="image is-5by3">
                                    <img src="https://i.redd.it/xlv1z1oy87d01.jpg" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CastHero;