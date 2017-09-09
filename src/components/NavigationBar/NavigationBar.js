import React, {Component} from 'react';
import { NavigationContainer, NavItem } from '../../components/NavigationBar/NavigationBar.style';



class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem>About Me</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;