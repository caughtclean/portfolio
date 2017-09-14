import React, { Component } from 'react';
import { Container } from '../../theme/grid'
import { Title, Background, RevealP, About } from './AboutMe.style'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import YouTube from 'react-youtube';
import { Flex } from '../../theme/grid';
import WhenInView from '../../components/WhenInView/WhenInView';
import Social from '../../components/Social/Social';
import SocialMob from '../../components/Social/SocialMob';


const Video = {
  opts1: {
      height: '390',
      width: '640',
      id: "jzD3OS_hiRI"
  },
  opts2: {
      height: '390',
      width: '640',
      id: "SXTWA4Q4MKU"
  },
  opts3: {
      height: '390',
      width: '640',
      id: "xZV6wzI2aN8"
  }

};

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <NavigationBar/>
        <Social/>
        <Background/>
        <Title>About Me</Title>
        <About>What do I like and all those good things</About>
        <p> I am a simple man. I like video games, technology, beer, skateboarding, comedy, jiu jitsu, magic, video editing, photography, pug dogs and brown haired girls. I also like eating. I have worked quite the gamut of jobs in my life from working at a clothing store, to running a excavator, coaching jiu jitsu to a traveling salesmen. I went to college for computer science and that has always been my main interest and drive. I recently went back to school to learn how to code properly and it is my main obsession. Here are a few side projects/jobs I have worked on over the years.
        </p>
        <About>Video editing</About>
        <p> I have always enjoy filming all sorts of things, from skateboarding, Jiu Jitsu, to work projects. I have been hired to film and edit small videos for companies and friends in the past and really enjoy it. I have also put quite a bit of time into dabbling in after effects and have taken a crack at some special effects fun. Here are a few examples:
        </p>
        <h2> Powell River Brazilian Jiu Jitsu </h2>

         <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>

         <Flex justify={'center'}>
          <YouTube
            videoId={Video.opts1.id}
            opts={Video.opts1}
          />
        </Flex>
        </RevealP>

      }
        </WhenInView>

        <p> I have trained Jiu Jitsu for several years, coached and competed as well. This is a promo video I shot and edited for my home town club. I even have a few moves in there!</p>
        <h2> Lois Lake Fishfarm </h2>
         <WhenInView>
        {({ isInView }) =>
        <RevealP hide={!isInView}>

         <Flex justify={'center'}>
          <YouTube
            videoId={Video.opts2.id}
            opts={Video.opts2}
          />
        </Flex>
        </RevealP>

      }
        </WhenInView>

        <p> I worked at a Fishfarm located at Lois Lake Powell River. Everything from construction, excavator work, general tech work, and shot and edited this commercial for them to present to investors. I have many more videos, let me know if you want to see more, or check out my youtube pages.</p>

        <SocialMob/>

      </Container>
    );
  }
}


export default AboutMe;