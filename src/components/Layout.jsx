import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Nav from './Nav'
/* import { Email } from 'styled-icons/material'
import { Github } from 'styled-icons/boxicons-logos'

import { useSiteMetadata } from '@utils'
import Footer from '@elements/Footer' */

function Layout({ className, children, title }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main className={className}>
        <Nav
          css={`
            margin-top: 5em;
            margin-bottom: 4em;
            grid-column: 2 / -2;
          `}
        />
        {children}
      </Main>
      {/* <Footer>
        <Button href="mailto:n.syahrasyad.n@gmail.com">
          <Email
            size="1.5em"
            css={`
              margin-right: 1em;
            `}
          />
          <p>n.syahrasyad.n@gmail.com</p>
        </Button>
        <Button href="https://github.com/narendrasss/v2">
          <Github
            size="1.5em"
            css={`
              margin-right: 1em;
            `}
          />
          <a href="https://github.com/narendrasss/v2">Website source code</a>
        </Button>
      </Footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
}

Layout.defaultProps = {
  className: '',
  title: '@narendras',
}

export default Layout

const Main = styled.main`
  padding: 0 2em;
  padding-bottom: 10vh;
  min-height: 95vh;
  max-width: 100vw;

  @media (min-width: 524px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media (min-width: 758px) {
    padding-left: 12vw;
    padding-right: 12vw;
  }

  @media (min-width: 1053px) {
    padding-left: 0;
    padding-right: 0;
    display: grid;
    grid-template-columns: 15vw 1fr 15vw;
    > * {
      grid-column: 2;
    }
  }
`

/* const Button = styled.a`
  outline: none;
  color: inherit;
  display: flex;
  align-items: center;
` */
