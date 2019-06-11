import styled from 'styled-components'

const Footer = styled.footer`
  background: #e6fffb;
  padding: 3em;
  margin: 0 -2em;
  color: #006d75;
  > * {
    font-size: 0.8em;
  }

  @media (min-width: 524px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media (min-width: 758px) {
    padding-left: 12vw;
    padding-right: 12vw;
  }
`

export default Footer
