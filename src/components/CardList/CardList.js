import React, {Component} from 'react';
import Card from '../Card/Card';

class CardList extends Component {
  render() {
    return (
        <div className="columns">
            {homeContent.map((item) => 
                    <Card
                        key={item.id} 
                        title={item.title}
                        img_path={item.img_path}
                        description={item.description}
                        btn={item.button}
                    />
                )
            }
        </div>
    )
  }
}

const homeContent = [
    {
      id: 1,
      title: 'Episodes',
      img_path: './images/bob_belcher.jpg',
      description: 'Edit content for this section',
      button: 'Search Episodes'
    },
    {
      id: 2,
      title: 'The Dev Team',
      img_path: './images/bob_belcher.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      button: 'Learn More'
    },
  ];

export default CardList;