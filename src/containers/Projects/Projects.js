import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton, Index, Background } from './Projects.style';
import { Container, Relative, Flex, marginBottom } from '../../theme/grid';
import { A } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

class Projects extends Component {
  render() {
    return (
      <Container>
        <NavigationBar/>
        <h1>Projects</h1>
        <Relative marginBottom="100px">
          <Index>
          <h1>01</h1>
          </Index>
        </Relative>
        <h2> Tweetr </h2>
        <p>A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol CSS3 </p>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/tweetr.png')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
              <img
                src={require('../../assets/tweetrthumb.png')}
                alt="tweetr"/>
              </ImageButton>}

              scale={[1.1, 1.1]}
              imageProps={{
                style: {
                  width: '100vw',
                  height: 'auto'
                }
              }}
          />
        </Flex>
        <h4><A href="https://floating-mesa-16014.herokuapp.com/"> Try it!</A>-----<A href="https://github.com/caughtclean/tweetr"> Github</A></h4>
        <Relative marginBottom="100px">
          <Index>
          <h1>02</h1>
          </Index>
        </Relative>
        <h2> Tweetr </h2>
        <p>A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol CSS3 </p>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/tweetr.png')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
              <img
                src={require('../../assets/tweetrthumb.png')}
                alt="tweetr"/>
              </ImageButton>}

              scale={[1.1, 1.1]}
              imageProps={{
                style: {
                  width: '100vw',
                  height: 'auto'
                }
              }}
          />
        </Flex>
        <h4><A href="https://floating-mesa-16014.herokuapp.com/"> Try it!</A>-----<A href="https://github.com/caughtclean/tweetr"> Github</A></h4>
      </Container>
    );
  }
}

export default Projects;