import styled from 'styled-components';

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
   &:hover {
    filter: grayscale(0%);
    transform: scale(1.5, 1.5);
    transition: 1s;
  };
`;