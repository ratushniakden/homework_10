import React, { Component } from 'react';
import styles from './ListItem.module.css';
import Icon from '@mdi/react';
import { mdiDelete, mdiDeleteEmpty } from '@mdi/js';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false,
    };
  }

  handleSelect = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };

  handleDelete = () => {
    this.props.filterItems(this.props);
  };

  render() {
    const { name, tagline, avatar } = this.props;
    const { isSelected } = this.state;

    const selectionStyle = {
      backgroundColor: isSelected ? 'lightblue' : 'transparent',
      border: isSelected ? '5px solid purple' : 'none',
    };

    return (
      <li style={selectionStyle} onClick={this.handleSelect}>
        <img src={avatar} alt="userAvatar" />
        <span>
          <h1>{name}</h1>
          <p>{tagline}</p>
        </span>
        <button onClick={this.handleDelete}>
          <Icon path={mdiDelete} size={2} />
        </button>
      </li>
    );
  }
}

export default ListItem;
