import styled, { css } from 'styled-components';



export const Image = styled.img`
  width: 100%
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

  h2 {
    margin: 0;
  }
`

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 30vh;
  height: 80vh;
  background-image: url(${require('../../assets/background1.jpg')});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: 0.7;

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