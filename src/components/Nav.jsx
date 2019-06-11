import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

function Nav({ className, routes }) {
  return (
    <nav className={className}>
      {routes.map(({ name, path }) => (
        <NavLink key={`${name}--${path}`} to={path} activeClassName="active">
          {name}
        </NavLink>
      ))}
    </nav>
  )
}

Nav.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
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

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  &.active {
    font-weight: 700;
  }
`
