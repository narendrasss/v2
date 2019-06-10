import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

function Nav({ routes }) {
  return (
    <div>
      {routes.map(({ name, path }) => (
        <NavLink key={`${name}--${path}`} to={path}>
          {name}
        </NavLink>
      ))}
    </div>
  )
}

export default Nav

const NavLink = styled(Link)`
  margin-right: 1.5em;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
`
