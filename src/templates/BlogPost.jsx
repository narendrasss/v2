import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '@components/Layout'
import Title from '@elements/Title'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Post>
      <Title
        css={`
          margin-bottom: 2em;
        `}
      >
        {post.frontmatter.title}
      </Title>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
    </Post>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Post = styled(Layout)`
  grid-template-columns: 1fr 42em 1fr;
  grid-auto-rows: min-content;
`

const Content = styled.article`
  font-size: 18px;
  line-height: 1.618;
  margin-bottom: 12em;
  > * {
    margin-bottom: 1.4em;
  }
  pre {
    margin: 2em 0;
  }
  a {
    color: ${({ theme }) => theme.colors.blue};
    &:hover {
      text-decoration: underline;
    }
  }
`
