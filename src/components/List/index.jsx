import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          firstName: '21st Amendment Brewery',
          lastName: '& Restaurant',
          tagline: 'rfcdscrsd',
          imgSrc:
            'https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg?itok=4t_1_fSJ',
        },
        {
          id: 2,
          firstName: "Anthony' Restaurants",
          lastName: '& Pizza',
          tagline: 'rsxqzmblp',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/200px-Cat03.jpg',
        },
        {
          id: 3,
          firstName: 'Boise Greenbelt',
          lastName: 'Trail',
          tagline: 'rhwdcdjsl',
          imgSrc:
            'https://images.photowall.com/products/49926/sweet-panda.jpg?h=699&q=85',
        },
        {
          id: 4,
          firstName: 'Firefly',
          lastName: 'Restaurant',
          tagline: 'rgxfrtknd',
          imgSrc:
            'https://obiaddlataty.pl/wp-content/uploads/2020/02/domowa_pizza.jpg',
        },
        {
          id: 5,
          firstName: 'Fringale',
          lastName: '',
          tagline: 'rwrxnsgph',
          imgSrc:
            'https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg',
        },
        {
          id: 6,
          firstName: "Mountain Mike's",
          lastName: 'Pizza - Saratoga',
          tagline: 'rzmrjnlmv',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Iceland-1979445_%28cropped_3%29.jpg/1200px-Iceland-1979445_%28cropped_3%29.jpg',
        },
        {
          id: 7,
          firstName: 'Philz',
          lastName: 'Coffee',
          tagline: 'rczlrtnqh',
          imgSrc:
            'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364',
        },
        {
          id: 8,
          firstName: "Raley's",
          lastName: 'Supermarket',
          tagline: 'rhtkrbnwm',
          imgSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUue9dxFcQt_f-Lurf2pHUMEat0S-5rYpnxA&usqp=CAU',
        },
        {
          id: 9,
          firstName: 'Rancho San Antonio',
          lastName: 'SuOpen Space Preserve',
          tagline: 'rxgrtbqkm',
          imgSrc:
            'https://diana-cdn.naturallycurly.com/Articles2.0/fRHAPz6iyljZtrGyziIBG/articleImages/highlight_image_tower/b867c344d98c204a1851a79ef19ec17f/liz-350-x-420.jpg',
        },
      ],
    };
  }

  filterItems = (filteredItem) => {
    this.setState({
      list: this.state.list.filter(
        (currentItem) => currentItem.id !== filteredItem.id
      ),
    });
  };

  renderListItems = () => {
    const { list } = this.state;
    return list.map((item) => (
      <ListItem
        key={item.id}
        id={item.id}
        avatar={item.imgSrc}
        name={`${item.firstName} ${item.lastName}`}
        tagline={item.tagline}
        filterItems={this.filterItems}
      />
    ));
  };

  render() {
    return <ul>{this.renderListItems()}</ul>;
  }
}

export default List;
