import React, { Component, ProtoTypes } from 'react';
import { Container } from '../../theme/grid';
import { Image, ProfileImage, RevealP, Background } from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';



export default class Home extends Component {
  static protoTypes = {};

  render() {
    return (
      <Container>
        <Background/>
        <ProfileImage>
          <h2>Nathan Eyerley</h2>
          <h3>Web Developer</h3>
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

