import React, { Component } from 'react';

export default class Home extends Component {
  static protoTypes = {};

  render() {
    return (
      <div>
        <h1>Hi Home</h1>
        <img src={require('../assets/profile.jpg')} alt="profile-image"/>
      </div>
    );
  }
}

