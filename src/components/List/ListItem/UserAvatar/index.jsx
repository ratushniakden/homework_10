import React, { Component } from 'react';

class UserAvatar extends Component {
  render() {
    return (
      <>
        <img src={this.props.avatar} alt="userAvatar" />
      </>
    );
  }
}

export default UserAvatar;
