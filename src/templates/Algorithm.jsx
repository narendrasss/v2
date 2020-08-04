import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import "katex/dist/katex.min.css"

// eslint-disable-next-line react/prop-types
export default ({ data }) => {
  const metadata = data.markdownRemark
  return (
    <Layout>
      <Article dangerouslySetInnerHTML={{ __html: metadata.html }} />
    </Layout>
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
  font-size: 1em;
  max-width: 42em;
  margin: 0 auto;
  
  > * {
    margin-bottom: 1em;
  }
`
