import React from 'react'
import styled from 'styled-components'
import { LeftArrowAlt } from 'styled-icons/boxicons-regular'
import { Link } from 'gatsby'

import Layout from '@components/Layout'
import Post from '@components/Post'
import Title from '@elements/Title'
import { useBlogPosts } from '@utils'

export default () => {
  document.title = `@narendras/blog`
  const posts = useBlogPosts()
  return (
    <BlogLayout>
      <Title
        css={`
          margin-bottom: 2em;
        `}
      >
        Blog
      </Title>
      {posts.length ? (
        <div>
          {posts.map(node => (
            <Post
              key={node.id}
              slug={node.fields.slug}
              timeToRead={node.timeToRead}
              {...node.frontmatter}
            />
          ))}
        </div>
      ) : (
        <Empty>
          Oops, looks like I haven't wrote anything yet. Check back later!
        </Empty>
      )}
    </BlogLayout>
  )
}

const BlogLayout = styled(Layout)`
  grid-auto-rows: min-content;
`

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.grays.dark};
  margin-bottom: 1em;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`
