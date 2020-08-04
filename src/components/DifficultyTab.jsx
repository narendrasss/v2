import React from 'react'
import Types from 'prop-types'
import styled from 'styled-components'

export default function DifficultyTab({ as, className, difficulty }) {
  const colors = {
    easy: '#5cb85c',
    medium: '#f0ad4e',
    hard: '#d9534f',
  }
  return (
    <Tab as={as} className={className} background={colors[difficulty]}>
      {difficulty}
    </Tab>
  )
}

DifficultyTab.propTypes = {
  as: Types.string,
  className: Types.string,
  difficulty: Types.oneOf(['easy', 'medium', 'hard']).isRequired,
}

DifficultyTab.defaultProps = {
  as: 'div',
  className: '',
}

const Tab = styled.div`
  background-color: ${({ background }) => background};
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8em;
  color: white;
  font-weight: 700;
  text-transform: capitalize;
  display: inline-block;
`
