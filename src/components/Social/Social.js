import React, {Component} from 'react';
import { SocialContainer, NavItem } from '../../components/NavigationBar/NavigationBar.style';
import { A, AA, AAA, Links } from '../../theme/types';

class Social extends Component {
  render() {
    return (
      <SocialContainer>
       <li>
       <AAA href="https://www.facebook.com/nathan.eyerley">
        <img
          src={require('../../assets/facebook.png')}/>
       </AAA>
       <AAA href="https://www.instagram.com/caughtclean/">
        <img
          src={require('../../assets/instagram.png')}/>
       </AAA>
       <AAA href="https://www.twitch.tv/caught_clean">
        <img
          src={require('../../assets/twitch.png')}/>
       </AAA>
       <AAA href="https://www.linkedin.com/in/nathan-eyerley-70b8bb134">
        <img
          src={require('../../assets/linkedin.png')}/>
       </AAA>
       <AAA href="mailto:eyerleyN@gmail.com">
        <img
          src={require('../../assets/email.png')}/>
       </AAA>
        </li>
      </SocialContainer>
    );
  }
}

export default Social;