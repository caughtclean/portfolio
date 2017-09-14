import styled from 'styled-components';
import media from '../../theme/media';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  & > img {
    ${media.tablet`
      width: 100vw;
      height: 60vh;
      `}
    ${media.phone`
       width: 100%;
       height: 100%;
      `}
  }

  & > img {
  transition: transform .3s;
  }
  &:hover {
    & > img {
      transform: scale(1.3);
    }
  }
`;

export const Index = styled.div`
  position = absolute;
  left: 0;
  bottom: 0;
  font-size: 3em;
  z-index: 1;
  h1 {
    margin: 0;
    font-weight: bold;
    opacity: 0.4;
    transform: translateY(-20%);
  }

`

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 120vh;
  background-image: url(${require('../../assets/background2.jpg')});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  opacity: 0.65;



`;
