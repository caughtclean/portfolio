import React, {Component} from 'react';
import { SocialMobContainer, NavItem } from '../../components/NavigationBar/NavigationBar.style';
import { A, AA, AAA, Links } from '../../theme/types';

class SocialMob extends Component {
  render() {
    return (
      <SocialMobContainer>
       <AAA target="_blank" href="https://www.facebook.com/nathan.eyerley">
        <img
          src={require('../../assets/facebook.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.instagram.com/caughtclean/">
        <img
          src={require('../../assets/instagram.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.twitch.tv/caught_clean">
        <img
          src={require('../../assets/twitch.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.linkedin.com/in/nathan-eyerley-70b8bb134">
        <img
          src={require('../../assets/linkedin.png')}/>
       </AAA>
       <AAA target="_blank" href="https://www.youtube.com/user/caughtclean">
        <img
          src={require('../../assets/youtube.png')}/>
       </AAA>
       <AAA href="mailto:eyerleyN@gmail.com">
        <img
          src={require('../../assets/email.png')}/>
       </AAA>
      </SocialMobContainer>
    );
  }
}

export default SocialMob;