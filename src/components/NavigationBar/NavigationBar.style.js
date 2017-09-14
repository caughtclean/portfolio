import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { Link } from 'react-router';
import media from '../../theme/media';


export const NavigationContainer = styled(Flex)`
  position: absolute;
  right: 6em;

  ${media.tablet`
    font-size: 16px;
    left: 0;
    right: 0;
    justify-content: center;
    top: 0;
    left:20px;
    `}
   ${media.phone`
    margin: 0;
    left: 0;
    right: 0;
    font-size: 12px;
    justify-content: center;
    `}



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

  ${media.phone`
    display: none;
  `}

   ${media.tablet`
    display: none;
  `}


 li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

`;

export const SocialMobContainer = styled(Flex)`
  position: static;
  bottom: 10%;
  left: 25%;
  justify-content: center;



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
      z-index: -1;

    }
  }
`;