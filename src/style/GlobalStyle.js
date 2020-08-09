import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { getResponsiveSize } from '@utils'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap');

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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: inside;
  }
`

export default GlobalStyle
