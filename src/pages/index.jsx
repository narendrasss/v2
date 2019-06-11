import React from 'react'

import Layout from '@components/Layout'
import Project from '@components/Project'
import Title from '@elements/Title'
import { useProjectsQuery } from '@utils'

export default () => {
  const projects = useProjectsQuery()
  return (
    <Layout>
      <Title
        css={`
          margin-bottom: 2em;
        `}
      >
        I'm Narendra, an aspiring software developer and business and computer
        science student @ UBC.
      </Title>
      <Project.Group>
        <Project.Heading>Projects</Project.Heading>
        {projects.map(project => (
          <Project key={project.id} {...project.frontmatter} />
        ))}
      </Project.Group>
    </Layout>
  )
}
