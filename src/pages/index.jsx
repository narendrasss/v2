import React from 'react'
import styled, { css } from 'styled-components'

import { fadeUp } from '@animations'
import Layout from '@components/Layout'
import Project from '@components/Project'
import Title from '@elements/Title'
import { useMetaContent, useProjectsQuery } from '@utils'

const animate = css`
  opacity: 0;
  transform: translateY(32px);
  animation-name: ${fadeUp()};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => `${delay / 10}s`};
`

export default () => {
  const { about } = useMetaContent()
  const projects = useProjectsQuery()
  return (
    <Layout>
      <AnimatedTitle
        delay={1}
        dangerouslySetInnerHTML={{ __html: about.html }}
      />
      <AnimatedHeading delay={3}>Projects</AnimatedHeading>
      <Project.Group>
        {projects.map((project, index) => {
          const { frontmatter, html, id } = project
          return (
            <AnimatedProject
              key={id}
              html={html}
              delay={5 + index}
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

  a {
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
