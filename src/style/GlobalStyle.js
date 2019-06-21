import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { getResponsiveSize } from '@utils'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');

  @import url('https://rsms.me/inter/inter.css');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 100%;
  }

  body {
    font-size: inherit;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.618;

    @media (min-width: 1024px) {
      font-size: ${getResponsiveSize({
        startSize: 16,
        endSize: 20,
        startWidth: 1024,
        endWidth: 1920,
      })};
    }

    @supports (font-variation-settings: normal) {
      font-family: 'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
