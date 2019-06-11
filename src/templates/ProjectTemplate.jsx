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
    <ProjectLayout>
      <CoverImage color={color}>
        <Image src={`../../${cover}`} alt={title} />
      </CoverImage>
      <Article>
        <header
          css={`
            margin-bottom: 3em;
            width: 100%;
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
              <Github size="1.5em" />
            </a>
            {link && (
              <a href={link}>
                <LinkExternal size="1.5em" />
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
      </Article>
    </ProjectLayout>
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

const ProjectLayout = styled(Layout)`
  padding: 0 3em;

  @media (min-width: 656px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 35em 1fr;
    > * {
      grid-column: 2;
    }
  }
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CoverImage = styled.figure`
  position: relative;
  width: 100vw;
  margin: 0 -3em;
  padding-top: 2em;
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    background: ${({ color }) => `#${color}`};
    width: 100%;
    height: 30%;
    z-index: -1;
  }

  @media (min-width: 656px) {
    margin: 0;
    grid-column: 1 / -1;
  }

  @media (min-width: 850px) {
    &:before {
      width: 850px;
      border-radius: 4px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
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
  width: 100%;
  display: flex;
  align-items: center;
  margin: 2em 0;
  > a {
    color: ${({ theme }) => theme.colors.grays.dark};
  }
`

const Content = styled.div`
  width: 100%;
  padding-bottom: 4em;
  > * {
    margin-bottom: 1em;
  }
`
