import styled, { css } from 'styled-components';
import media from '../../theme/media';



export const Image = styled.img`
  width: 100%
`

export const Img = styled.img`
  height: 25%;
  width: 25%;
  float: right;
  bottom: 0;
  right: -20vh;
`;

export const NavRight = styled.div`
  position: relative;
  float: right;
  bottom: 0;
  font-size: 2.5em;
  z-index: 1;
  &:hover {
   cursor: pointer;
   background-image: url('${require('../../assets/arrowright.png')}');
   background-repeat:no-repeat;
   background-position:bottom;
   background-size: 60%;
   h1 {
    margin: 0;
    font-weight: bold;
    font-size: 1em;
    opacity: 1;
    transform: translateY(-20%);

  }
}
  h1 {
    margin: 0;
    font-weight: bold;
    font-size: 1em;
    opacity: .4;
    transform: translateY(-20%);
  }


`

export const NavLeft = styled.div`
  position: relative;
  float: left;
  bottom: 0;
  font-size: 2.5em;
  z-index: 1;
  &:hover {
   cursor: pointer;
   background-image: url('${require('../../assets/arrowleft.png')}');
   background-repeat:no-repeat;
   background-position:bottom;
   background-size: 60%;
   h1 {
    margin: 0;
    font-weight: bold;
    font-size: 1em;
    opacity: 1;
    transform: translateY(-20%);

  }
}
  h1 {
    margin: 0;
    font-weight: bold;
    font-size: 1em;
    opacity: .4;
    transform: translateY(-20%);
  }


`

export const ProfileImage = styled.div`
  height: 100vh;
  background-image: url('${require('../../assets/background.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 50px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  color: white;

  font-size: 2em;

  ${media.tablet`
    font-size: 1em;
    left: 0;
    width: 100vw;
    top: 10vh;
    height: 100vh;
    margin-top: 10vh;
    margin-bottom: 300px;
    `}
      ${media.phone`
    font-size: 1em;
    left: 0;
    width: 100vw;
    top: 0;
    height: 100vh;
    margin-top: 10vh;
    margin-bottom: 300px;
    `}

  h2 {
    margin: 0;
  }
`

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 90vw;
  top: 20vh;
  height: 100vh;
  background-image: url(${require('../../assets/background1.jpg')});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: 0.7;

  ${media.tablet`
    font-size: 1em;
    left: 0;
    width: 100vw;
    top: 0;
    height: 80vh;
    margin-top: 10vh;
    margin-bottom: 300px;
    `}
      ${media.phone`
    font-size: 1em;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%
    margin-top: 10vh;
    margin-bottom: 300px;
    `}


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