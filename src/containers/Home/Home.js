import React, { Component, ProtoTypes } from 'react';
import { Container } from '../../theme/grid';
import { Image, ProfileImage, RevealP } from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';



export default class Home extends Component {
  static protoTypes = {};

  render() {
    return (
      <Container>
        <ProfileImage>
          <h1>Nathan Eyerley</h1>
          <h2>Web Developer</h2>
        </ProfileImage>
        <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
          This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!
        </RevealP>

      }
        </WhenInView>
         <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
          This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!
        </RevealP>

      }
        </WhenInView>
         <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
          This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!This will describe how awesome I am!
        </RevealP>

      }
        </WhenInView>

      </Container>
    );
  }
}

