import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <span>
        <h1>{this.props.name}</h1>
        <p>{this.props.tagline}</p>
      </span>
    );
  }
}

export default UserInfo;
