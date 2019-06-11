import styled from 'styled-components'
import { getResponsiveSize } from '@utils'

const Title = styled.h1`
  font-size: 2em;
  line-height: 1.4;

  @media (min-width: 414px) {
    font-size: ${getResponsiveSize({
      startSize: 32,
      endSize: 56,
      startWidth: 414,
      endWidth: 758,
    })};
  }

  @media (min-width: 758px) {
    font-size: 3.5em;
  }

  @media (min-width: 1024px) {
    font-size: ${getResponsiveSize({
      startSize: 56,
      endSize: 72,
      startWidth: 1024,
      endWidth: 1920,
    })};
  }
`

export default Title
