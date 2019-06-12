import { keyframes } from 'styled-components'

export const slideOut = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`

export const fadeUp = ({ from = '32px', to = '0' } = {}) => keyframes`
  from {
    opacity: 0;
    transform: translateY(${from});
  }

  to {
    opacity: 1;
    transform: translateY(${to});
  }
`
