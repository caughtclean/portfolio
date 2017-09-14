import React, { Component, ProtoTypes } from 'react';
import { Container } from '../../theme/grid';
import { Image, ProfileImage, RevealP, Background } from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';
import Social from '../../components/Social/Social';




export default class Home extends Component {
  static protoTypes = {};

  render() {
    return (
      <Container>
        <Social/>
        <Background/>
        <ProfileImage>
          <h2>Nathan Eyerley</h2>
          <h3>Web Developer</h3>
        </ProfileImage>
        <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
          I am a long time technology enthusiast with a passion for problem solving and creating. I have worked in video/photo editing  for years and enjoy all aspects of programming and hardware alike. I recently graduated from the lighthouse labs web development bootcamp, and am eager to get into the field. I enjoy full stack development but shine mostly in front end library like React/Redux and also enjoy design.

        </RevealP>

      }
        </WhenInView>

         <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
             Take a look at the project page for some demos, github links and some other non coding projects I have worked on in the about me Page.
        </RevealP>

      }
        </WhenInView>

        <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>
          This is a little portfolio/project page I made to show some of the stuff I have worked on or am currently working on, and some non coding stuff I like to have fun with. I created this portfolio in React.js and the source is in the projects page if you want to take a look. Credit to https://www.sonchu.co 'FroDev' for his youtube series on creating a cool
            portfolio like this.
        </RevealP>

      }
        </WhenInView>

      </Container>
    );
  }
}

