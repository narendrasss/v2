import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Email } from 'styled-icons/material'
import { Github } from 'styled-icons/boxicons-logos'

import { useSiteMetadata } from '@utils'
import Footer from '@elements/Footer'
import Nav from './Nav'

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
          `}
        />
        {children}
      </Main>
      <Footer>
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
      </Footer>
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
  min-height: 95vh;

  @media (min-width: 524px) {
    padding: 0 10vw;
  }

  @media (min-width: 758px) {
    padding: 0 12vw;
  }

  @media (min-width: 1053px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 48em 1fr;
    > * {
      grid-column: 2;
    }
  }
`

const Button = styled.a`
  outline: none;
  color: inherit;
  display: flex;
  align-items: center;
`
