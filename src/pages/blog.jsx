import React from 'react'
import styled from 'styled-components'
import { LeftArrowAlt } from 'styled-icons/boxicons-regular'
import { Link } from 'gatsby'

import Layout from '@components/Layout'
import Title from '@elements/Title'

export default () => {
  return (
    <BlogLayout>
      <Title
        css={`
          margin-bottom: 2em;
        `}
      >
        Blog
      </Title>
      <Empty>
        Oops, looks like I haven't wrote anything yet. Check back later!
      </Empty>
      <StyledLink to="/">
        <LeftArrowAlt size="1.5em" />
        {` `}
        Go back home
      </StyledLink>
    </BlogLayout>
  )
}

const BlogLayout = styled(Layout)`
  grid-auto-rows: min-content;
`

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.grays.dark};
  margin-bottom: 1em;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`
