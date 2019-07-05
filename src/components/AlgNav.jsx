import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useAlgorithmsQuery } from '@utils'

function AlgNav({ className }) {
  const algs = useAlgorithmsQuery()
  return (
    <nav className={className}>
      {algs.map(({ id, frontmatter }) => {
        const number = String(frontmatter.number).padStart(3, '0')
        return (
          <AlgLink key={id} to={`algorithms/${number}`}>
            <AlgNumber>{number}</AlgNumber>
            <AlgTitle>{frontmatter.title}</AlgTitle>
          </AlgLink>
        )
      })}
    </nav>
  )
}

AlgNav.propTypes = {
  className: PropTypes.string,
}

AlgNav.defaultProps = {
  className: '',
}

export default AlgNav

const AlgLink = styled(Link).attrs({ activeClassName: 'active' })`
  display: block;
  display: flex;
  font-family: 'IBM Plex Mono';
  font-size: 0.9em;

  span {
    color: ${({ theme }) => theme.colors.grays.dark};
  }

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

const AlgNumber = styled.span`
  flex: 1;
`

const AlgTitle = styled.p`
  flex: 5;
`
