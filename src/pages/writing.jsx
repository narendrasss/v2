import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import DifficultyTab from '@components/DifficultyTab'
import Layout from '@components/Layout'
import BaseTitle from '@elements/Title'
import { useAlgorithmsQuery } from '@utils'

export default () => {
  const problems = useAlgorithmsQuery()
  return (
    <Layout>
      <Title>LeetCode Journal</Title>
      <Content>
        <p>
          The LeetCode journal is a brain dump of thoughts that I use to
          practice technical interviews. They are messy and unedited but are
          nevertheless meant to emulate how I would explain it in a real
          interview!
        </p>
      </Content>
      <ProblemList>
        <ul>
          {problems.map(({ id, frontmatter }) => {
            const number = String(frontmatter.number).padStart(3, '0')
            return (
              <Problem key={number}>
                <ProblemLink key={id} to={`/algorithms/${number}`}>
                  <ProblemNumber>
                    #
                    {number}
                  </ProblemNumber>
                  {` `}
                  {frontmatter.title}
                  <Tab difficulty={frontmatter.difficulty} as="span" />
                </ProblemLink>
              </Problem>
            )
          })}
        </ul>
      </ProblemList>
    </Layout>
  )
}

const Tab = styled(DifficultyTab)`
  margin-left: auto;
`

const Content = styled.section`
  grid-column: 3 / span 3;
`

const Title = styled(BaseTitle)`
  grid-column: 3 / span 3;
  margin-top: 0;
`

const ProblemList = styled.nav`
  grid-row: 2;
  grid-column: span 4 / -3;
`

const Problem = styled.li`
  list-style: none;
  margin-bottom: 8px;
`

const ProblemLink = styled(Link)`
  display: block;
  font-weight: 600;
  padding: 12px;
  background: rgb(0, 0, 0, 0.05);
  border-radius: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    color: white;

    code {
      color: white;
      opacity: 1;
    }
  }
`

const ProblemNumber = styled.code`
  opacity: 0.5;
`
