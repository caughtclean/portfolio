import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton, Index, Background } from './Projects.style';
import { Container, Relative, Flex, marginBottom } from '../../theme/grid';
import { A, Links } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Social from '../../components/Social/Social';
import SocialMob from '../../components/Social/SocialMob';
import { NavItemBottom } from '../../components/NavigationBar/NavigationBar.style';
import { NavLeft, NavRight } from '../../containers/Home/Home.style';

class Projects extends Component {
  render() {
    return (
      <Container>
        <Background/>
        <NavigationBar/>
        <Social/>
        <h1>Projects</h1>
        <Relative>
          <Index>
          <h1>01</h1>
          </Index>
        </Relative>
        <h2> UPIK </h2>
        <p>Provides an easy way to share lists of movies, restaurants and other activities with friends and make decisions together. Front-end built using React, Redux, React DND (drag and drop) and animations in React while synchronizing changes across multiple users. Postsgres for data storage. Knex for migrations and building SQL queries.
          Socket.io for websockets. </p>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/upik.png')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
              <img
                src={require('../../assets/upikthumb.png')}
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
        <Links><A target="_blank" href="http://upik.herokuapp.com/"> Try it!(Log in as "Nathan")</A></Links><Links><A target="_blank" href="https://github.com/efredine/collaborative-lists"> Github</A></Links>
        <Relative>
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
        <Links><A target="_blank" href="https://floating-mesa-16014.herokuapp.com/"> Try it!</A></Links><Links><A target="_blank" href="https://github.com/caughtclean/tweetr"> Github</A></Links>

        <Relative>
          <Index>
          <h1>03</h1>
          </Index>
        </Relative>
        <h2> butthatswrong.com </h2>
        <p>A single page React/Redux blog app, that incorporates youtube video blogs with facebook comments attached. Clicking on a new episode will seamlessly load the next video and comments without reloading the page. Also my personal rage blog where I rant about things that drive me nuts. Keep in mind I am mostly kidding...</p>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/wrong.png')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
              <img
                src={require('../../assets/wrongthumb.png')}
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
        <Links><A target="_blank" href="http://butthatswrong.herokuapp.com/">"butthatswrong.com" </A></Links><Links><A target="_blank" href="https://github.com/caughtclean/but-thats-wrong-blog"> Github</A></Links>

        <Relative>
          <Index>
          <h1>04</h1>
          </Index>
        </Relative>
        <h2> Chatty App </h2>
        <p>A realtime chat app created using react, babel, webpack and web sockets.</p>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/chatty.png')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
              <img
                src={require('../../assets/chattythumb.png')}
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
        <Links><A target="_blank" href="https://github.com/caughtclean/chatty-app"> Github</A></Links>

        <Relative>
          <Index>
          <h1>05</h1>
          </Index>
        </Relative>
        <h2> Jungle Rails </h2>
        <p>An e-commerce Rails app built for learning Rails through example</p>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/jungle.png')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
              <img
                src={require('../../assets/junglethumb.png')}
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
        <Links><A target="_blank" href="https://github.com/caughtclean/jungle-rails"> Github</A></Links>

        <Relative>
          <Index>
          <h1>06</h1>
          </Index>
        </Relative>
        <h2> This Portfolio! </h2>
        <p>Here is the source for this portfolio I built. Built in Reactjs.</p>
        <Flex justify={'center'}>
          <Zoomy
            imageUrl={require('../../assets/port.png')}
            renderThumbnail={({ showImage }) =>
              <ImageButton onClick={showImage}>
              <img
                src={require('../../assets/portthumb.png')}
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
        <Links><A target="_blank" href="https://github.com/caughtclean/portfolio"> Github</A></Links>
        <NavItemBottom to="/#">
          <NavLeft>
            <h1>Home</h1>
          </NavLeft>
        </NavItemBottom>
        <NavItemBottom to="/aboutMe">
          <NavRight>
            <h1>About Me</h1>
          </NavRight>
        </NavItemBottom>
        <SocialMob/>
      </Container>
    );
  }
}

export default Projects;