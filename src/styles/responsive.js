import { css } from 'styled-components';

export const smallMobile = props => {
  return css`
    @media only screen and (max-width: 360px) {
      ${props}
    }
  `;
};

export const mobile = props => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const tablet = props => {
  return css`
    @media only screen and (max-width: 850px) {
      ${props}
    }
  `;
};

export const large = props => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};
