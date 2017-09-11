import styled, { css } from 'styled-components';

export const Title = styled.h1`
  margin-top: 20vh;
  color: black;
  margin-bottom: 10vh;
`;

export const About = styled.h2`
  margin-top: 10vh;
  color: black;
  margin-bottom: 10vh;
`;

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 100vh;
  background-image: url(${require('../../assets/profile.jpg')});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: 0.55;

`;

export const VideoContainer = styled.div`
  position: absolute;

`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;