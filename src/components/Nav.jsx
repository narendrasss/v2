import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

function Nav({ className }) {
  return (
    <nav className={className}>
      <NavLink to="/">work</NavLink>
      <NavLink to="/writing">writing</NavLink>
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

const NavLink = styled(Link).attrs({ activeClassName: 'active' })`
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
