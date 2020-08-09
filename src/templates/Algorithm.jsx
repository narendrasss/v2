import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import DifficultyTab from '@components/DifficultyTab'
import Layout from '@components/Layout'

import "katex/dist/katex.min.css"

// eslint-disable-next-line react/prop-types
export default ({ data }) => {
  const metadata = data.markdownRemark
  return (
    <Layout>
      <Header>
        <DifficultyTab difficulty={metadata.frontmatter.difficulty} />
        <Title>
          <span style={{ opacity: 0.5 }}>
            #
            {metadata.frontmatter.number}
          </span>
          {` `}
          {metadata.frontmatter.title}
        </Title>
      </Header>
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
        number
        difficulty
      }
    }
  }
`

const Article = styled.article`
  font-size: 1em;
  max-width: 42em;
  
  > * {
    margin-bottom: 16px;
  }

  h2 {
    margin-top: 1em;
  }
`

const Title = styled.h1`
  margin: 0;
`

const Header = styled.header`
  margin-bottom: 1em;
`
