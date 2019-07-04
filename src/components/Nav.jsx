import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

function Nav({ className }) {
  return (
    <nav className={className}>
      <NavLink to="/" activeClassName="active">
        work
      </NavLink>
      {/* <NavLink to="/blog" activeClassName="active">
        blog
      </NavLink> */}
      <NavLink as="a" href="mailto:n.syahrasyad.n@gmail.com">
        contact
      </NavLink>
    </nav>
  )
}

Nav.propTypes = {
  className: PropTypes.string,
}

Nav.defaultProps = {
  className: '',
}

export default Nav

const NavLink = styled(Link)`
  margin-right: 1.5em;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease-out;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  &.active {
    font-weight: 700;
  }
`
