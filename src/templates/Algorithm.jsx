import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import AlgLayout from '@components/AlgLayout'

// eslint-disable-next-line react/prop-types
export default ({ data }) => {
  const metadata = data.markdownRemark
  return (
    <AlgLayout>
      <h1>{metadata.frontmatter.title}</h1>
      <Article dangerouslySetInnerHTML={{ __html: metadata.html }} />
    </AlgLayout>
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

const Article = styled.article`
  font-size: 16px;
  > * {
    margin-bottom: 1em;
  }
`
