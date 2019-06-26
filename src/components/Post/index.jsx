import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { format } from 'date-fns'
import { RightArrowAlt } from 'styled-icons/boxicons-regular'
import { topics } from '@utils'

import Group from './Group'

function Post({ date, slug, tagline, title, topic }) {
  const topicColor = topics[topic.toLowerCase()]
  return (
    <Container>
      <Topic bg={topicColor}>{topic}</Topic>
      <DateOfPost>{format(date, 'DD MMM YY')}</DateOfPost>
      <div>
        <Title>{title}</Title>
        <Tagline>{tagline}</Tagline>
      </div>
      <Footer to={slug}>
        <Read>Read</Read>
        <Icon size="1.2em" />
      </Footer>
    </Container>
  )
}

Post.propTypes = {
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
}

Post.Group = Group

export default Post

const Container = styled.div`
  flex-basis: 12em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const Title = styled.h1`
  font-size: 2.5em;
  margin: 0.5em 0;
  line-height: 1.2;
`

const Topic = styled.p`
  padding: 0.2em 0.8em;
  border-radius: 4px;
  color: ${({ bg, theme }) => (bg ? 'white' : theme.colors.black)};
  background: ${({ bg, theme }) => bg || theme.colors.grays.light};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
`

const DateOfPost = styled.p`
  color: ${({ theme }) => theme.colors.grays.dark};
  font-size: 0.9em;
  margin-top: 2em;
`

const Tagline = styled.p`
  width: 60%;
  color: ${({ theme }) => theme.colors.grays.dark};
`

const Icon = styled(RightArrowAlt)`
  color: ${({ theme }) => theme.colors.grays.med};
  transition: transform 0.2s ease-out;
`

const Footer = styled(Link)`
  margin-top: 3em;
  padding-top: 0.5em;

  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  border-top: 3px solid ${({ theme }) => theme.colors.grays.light};
  color: ${({ theme }) => theme.colors.grays.dark};

  &:after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    top: -3px;
    left: 0;
    background: ${({ theme }) => theme.colors.blue};
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    ${Icon} {
      transform: translateX(0.5em);
      color: ${({ theme }) => theme.colors.blue};
    }
    &:after {
      transform: scaleX(1);
    }
  }
`

const Read = styled.p`
  margin-right: 0.5em;
`
