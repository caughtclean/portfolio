import styled, { css } from 'styled-components';
import media from '../theme/media';

export const Div = styled.div `
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
`;

export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 30px;
  padding-bottom: 30vh;

  ${media.giant`
    padding-left: 120px;
    padding-right: 120px;
    padding-top: 15px;
  `}
    ${media.desktop`
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 15px;
  `}

  ${media.tablet`
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 15px;
  `}

  ${media.phone`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    font-size: 14px;
  `}

`

export const Relative = styled(Div)`
  position: relative;
  height: 0;
`

export const Flex = styled(Div)`
  display: flex;

  ${({ column }) => column && css`
    flex-direction: column;
  `}

  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}
  ${({ align }) => align && css`
    align-content: ${align};
  `}

`