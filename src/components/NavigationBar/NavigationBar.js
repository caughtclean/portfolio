import React, {Component} from 'react';
import { NavigationContainer, NavItem } from '../../components/NavigationBar/NavigationBar.style';
import { A, AA, Links } from '../../theme/types';




class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/aboutMe">About Me</NavItem>
        <NavItem><AA target="_blank" href="https://www.dropbox.com/s/tijdf9tducwnqlk/Nathan_Eyerley_Resume.pdf?dl=0">Resume</AA></NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;