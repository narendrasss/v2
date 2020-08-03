import React from 'react'
import styled, { css } from 'styled-components'

import { fadeUp } from '@animations'
import Layout from '@components/Layout'
import Project from '@components/Project'
import Title from '@elements/Title'
import { useProjectsQuery } from '@utils'

const animate = css`
  opacity: 0;
  transform: translateY(32px);
  animation-name: ${fadeUp()};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: ${({ order }) => `${order / 10}s`};
`

export default () => {
  const projects = useProjectsQuery()
  return (
    <Layout>
      <AnimatedTitle order={1}>
        Hey, I'm Nanda! I'm a senior developer @
        {' '}
        <a href="https://tapestry-tool.com/" target="_blank" rel="noreferrer">
          Tapestry
        </a>
        {' '}
        and 5th year Business & CS @
        {' '}
        <a href="https://www.ubc.ca/" target="_blank" rel="noreferrer">
          UBC
        </a>
        .
      </AnimatedTitle>
      <Project.Group>
        <AnimatedHeading order={3}>Projects</AnimatedHeading>
        {projects.map((project, index) => {
          const { frontmatter, html, id } = project
          return (
            <AnimatedProject
              key={id}
              html={html}
              order={5 + index}
              {...frontmatter}
            />
          )
        })}
      </Project.Group>
    </Layout>
  )
}

const AnimatedTitle = styled(Title)`
  ${animate}
  margin-bottom: 2em;

  > a {
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

const AnimatedHeading = styled(Project.Heading)`
  ${animate}
`

const AnimatedProject = styled(Project)`
  ${animate}
`
