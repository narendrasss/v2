import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import DifficultyTab from '@components/DifficultyTab'
import BaseLayout from '@components/Layout'
import BaseTitle from '@elements/Title'
import { useAlgorithmsQuery } from '@utils'

export default () => {
  const problems = useAlgorithmsQuery()
  return (
    <Layout>
      <Content>
        <Title>LeetCode Journal</Title>
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
                  <Tab difficulty={frontmatter.difficulty} />
                </ProblemLink>
              </Problem>
            )
          })}
        </ul>
      </ProblemList>
    </Layout>
  )
}

const Layout = styled(BaseLayout)`
  padding: 0;
  height: 100vh;
  grid-template-rows: repeat(3, 1fr);
`

const Tab = styled(DifficultyTab)`
  margin-left: auto;
`

const Content = styled.section`
  grid-column: 3 / span 3;
`

const Title = styled(BaseTitle)`
  margin-top: 0;
`

const ProblemList = styled.nav`
  grid-row: 1 / -1;
  grid-column: span 4 / -3;
  padding-top: 32vh;
  overflow-y: scroll;
`

const Problem = styled.li`
  list-style: none;
  margin-bottom: 8px;
`

const ProblemLink = styled(Link)`
  display: flex;
  align-items: center;
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
  margin-right: 6px;
`
