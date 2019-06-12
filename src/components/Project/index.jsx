import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { RightArrowAlt } from 'styled-icons/boxicons-regular'
import { Link } from 'gatsby'

import Subtitle from '@elements/Subtitle'
import Group from './Group'
import Heading from './Heading'

function Project({ className, color, cover, description, path, title }) {
  return (
    <Wrapper className={className} to={path}>
      <ImageContainer
        css={`
          background-color: ${`#${color}`};
        `}
      >
        <Image src={`./thumbnails/${cover}`} alt={title} id={title} />
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <More to={path}>
        Read more
        {` `}
        <RightArrowAlt size="1em" />
      </More>
    </Wrapper>
  )
}

Project.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Project.defaultProps = {
  className: '',
}

Project.Group = Group
Project.Heading = Heading

export default Project

const More = styled(Link)`
  color: ${({ theme }) => theme.colors.grays.dark};
  font-size: 0.8em;
  transition: all 0.2s ease-out;
`

const Wrapper = styled(Link)`
  &:hover {
    img {
      transform: scale(1.05);
    }

    ${More} {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  @media (min-width: 1024px) {
    width: 23em;
  }
`

const ImageContainer = styled.figure`
  height: 400px;
  min-width: 100%;
  margin: 0;
  border-radius: 0.5rem;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  margin-left: 3em;
  margin-top: 3em;
  transition: all 0.2s ease-out;

  &#Dictionary {
    object-fit: cover;
    margin-left: 0;
    margin-top: 1em;
  }

  &#Music {
    width: auto;
    height: 400px;
  }
`

const Title = styled(Subtitle).attrs({ as: 'h1' })`
  font-weight: 600;
  margin-bottom: 0.2em;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grays.dark};
  margin-top: 0;
  margin-bottom: 0.5em;
`
