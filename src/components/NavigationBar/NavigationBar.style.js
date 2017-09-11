import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { Link } from 'react-router';


export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 6em;

`;

export const SocialContainer = styled(Flex)`
  list-style-type: none;
  margin: 0;
  top: 25%;
  left: 0;
  padding: 0;
  width: 25%;
  height: 100%;
  position: fixed;
 li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

`;


export const NavItem = styled(Link)`
  margin-right: 30px;
  font-size: 1.3em;
  cursor: pointer;
  positon: relative;
  text-decoration: none;
  color: black;
  &:hover {
    color: yellow;
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: gray;
      z-index: -1;

    }
  }
`;