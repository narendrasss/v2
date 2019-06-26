import React from 'react'
import styled from 'styled-components'

import Layout from '@components/Layout'
import Post from '@components/Post'
import Title from '@elements/Title'
import { useBlogPosts } from '@utils'

export default () => {
  const posts = useBlogPosts()
  return (
    <BlogLayout title="@narendras/blog">
      <Title
        css={`
          margin-bottom: 2em;
        `}
      >
        Blog
      </Title>
      {posts.length ? (
        <Post.Group>
          {posts.map(node => (
            <Post
              key={node.id}
              slug={node.fields.slug}
              timeToRead={node.timeToRead}
              {...node.frontmatter}
            />
          ))}
        </Post.Group>
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
  padding-bottom: 12em;
`

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.grays.dark};
  margin-bottom: 1em;
`
