import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 80vh;
  background-image: url(${require('../../assets/background.jpg')});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: 0.65;

`;

