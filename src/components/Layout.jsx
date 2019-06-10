import React from 'react'
import styled from 'styled-components'
import { useSiteMetadata } from '@utils'

function Layout({ children }) {
  const { routes } = useSiteMetadata()
  return <main>{children}</main>
}

export default Layout

const Main = styled.main``
