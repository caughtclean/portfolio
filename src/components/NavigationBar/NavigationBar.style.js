import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 6em;

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