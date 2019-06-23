import React from 'react'
import { Link } from 'gatsby'
import { format } from 'date-fns'
import styled from 'styled-components'

function Post({ date, slug, tagline, timeToRead, title }) {
  return (
    <Container to={slug}>
      <h1>{title}</h1>
      <p>{tagline}</p>
      <Footer>
        <p
          css={`
            margin-right: 1em;
          `}
        >
          {format(date, `D MMM YYYY`)}
        </p>
        <p>{`${timeToRead} min`}</p>
      </Footer>
    </Container>
  )
}

export default Post

const Container = styled(Link)`
  &:hover {
    h1 {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

const Footer = styled.footer`
  display: flex;
  color: ${({ theme }) => theme.colors.grays.dark};
  margin-top: 1em;
`
