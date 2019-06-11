import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Email } from 'styled-icons/material'
import { Github } from 'styled-icons/boxicons-logos'

import { useSiteMetadata } from '@utils'
import Footer from '@elements/Footer'
import Nav from './Nav'

function Layout({ children }) {
  const { routes } = useSiteMetadata()
  return (
    <Main>
      <Nav
        css={`
          margin-top: 5em;
          margin-bottom: 4em;
        `}
        routes={routes}
      />
      {children}
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
    </Main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
  padding: 0 2em;
`

const Button = styled.a`
  outline: none;
  color: inherit;
  display: flex;
  align-items: center;
`
