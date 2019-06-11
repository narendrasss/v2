import React from 'react'
import styled from 'styled-components'
import { Github } from 'styled-icons/boxicons-logos'
import { LinkExternal } from 'styled-icons/boxicons-regular'
import { graphql } from 'gatsby'

import Layout from '@components/Layout'
import Title from '@elements/Title'
import Subtitle from '@elements/Subtitle'

// eslint-disable-next-line react/prop-types
function ProjectTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const { title, tech, cover, color, role, github, link } = frontmatter
  return (
    <Layout>
      <CoverImage color={color}>
        <Image src={`../../${cover}`} alt={title} />
      </CoverImage>
      <article
        css={`
          padding: 0 1em;
        `}
      >
        <header
          css={`
            margin-bottom: 3em;
          `}
        >
          <Header>
            <Title
              css={`
                margin: 0 1em 0 0;
              `}
            >
              {title}
            </Title>
            <a
              href={github}
              css={`
                margin-right: 0.5em;
              `}
            >
              <Github size="1em" />
            </a>
            {link && (
              <a href={link}>
                <LinkExternal size="1em" />
              </a>
            )}
          </Header>
          <Info>
            <section>
              <Subtitle>Technologies</Subtitle>
              <Caption>{tech.join(', ')}</Caption>
            </section>
            <section>
              <Subtitle>Role</Subtitle>
              <ul
                css={`
                  list-style: none;
                `}
              >
                {role.map(desc => (
                  <Caption key={desc} as="li">
                    {desc}
                  </Caption>
                ))}
              </ul>
            </section>
          </Info>
        </header>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        color
        cover
        github
        role
        tech
        title
        link
      }
    }
  }
`

const CoverImage = styled.figure`
  position: relative;
  width: 100%;
  margin: 0;
  padding-top: 2em;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    background: ${({ color }) => `#${color}`};
    width: 100vw;
    margin: 0 -2em;
    height: 30%;
    z-index: -1;
  }
`

const Image = styled.img`
  width: 100vw;
  margin: 0 -2em;
  object-fit: cover;
`

const Caption = styled.p`
  color: ${({ theme }) => theme.colors.grays.dark};
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    &:first-child {
      margin-bottom: 1em;
    }
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 2em 0;
  > a {
    color: ${({ theme }) => theme.colors.grays.dark};
  }
`

const Content = styled.div`
  padding-bottom: 4em;
  > * {
    margin-bottom: 1em;
  }
`
