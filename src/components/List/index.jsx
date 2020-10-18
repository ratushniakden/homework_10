import React, { Component } from 'react';
import ListItem from './ListItem';
import userData from './userData.json';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: userData,
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
