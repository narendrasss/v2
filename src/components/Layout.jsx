import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '@utils'
import Nav from './Nav'

function Layout({ children }) {
  const { routes } = useSiteMetadata()
  return (
    <Main>
      <Nav routes={routes} />
      {children}
    </Main>
  )
}

export default Layout

const Main = styled.main`
  padding: 0 2em;
`
