import styled from 'styled-components';
import media from '../theme/media';

export const A = styled.a`
  color: black;
  text-decoration: none;
   &:hover {
    color: yellow;
  };

`

export const AA = styled.a`
  color: black;
  text-decoration: none;
   &:hover {
    color: yellow;
  };

`
export const Links = styled.h4`
  text-align: center;
`;

export const AAA = styled.a`
  text-decoration: none;
  filter: grayscale(100%);
  display: none;

   ${media.tablet`
    filter: grayscale(0%);
    display: flex;
    padding: 5px;
  `}

  ${media.phone`
    display: flex;
    padding: 5px;
    filter: grayscale(0%);
  `}

   &:hover {
    filter: grayscale(0%);
    transform: scale(1.5, 1.5);
    transition: .5s;
  };

`;