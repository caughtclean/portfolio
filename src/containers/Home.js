import React, { Component, ProtoTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
  width: 100%
`

export default class Home extends Component {
  static protoTypes = {};

  render() {
    return (
      <Container>
        <Image src={require('../assets/profile.jpg')} alt="profile-image"/>
        <p>
          This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!
        </p>
      </Container>
    );
  }
}

