import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Github } from 'styled-icons/boxicons-logos'
import { LinkExternal } from 'styled-icons/boxicons-regular'

import Subtitle from '@elements/Subtitle'
import Group from './Group'
import Heading from './Heading'

function Project({
  className,
  color,
  cover,
  path,
  title,
  html,
  github,
  link,
  tech,
}) {
  return (
    <Wrapper className={className} to={path}>
      <ImageContainer
        css={`
          background-color: ${`#${color}`};
        `}
      >
        <Image src={`./thumbnails/${cover}`} alt={title} id={title} />
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <Tech>{tech.sort().join(' / ')}</Tech>
        <Description dangerouslySetInnerHTML={{ __html: html }} />
        <div>
          <Icon
            href={github}
            css={`
              margin-right: 0.5em;
            `}
            data-tooltip={github.split('https://')[1]}
            target="_blank"
          >
            <Github size="1.5em" />
          </Icon>
          {link && (
            <Icon
              href={link}
              data-tooltip={link.split('https://')[1]}
              target="_blank"
            >
              <LinkExternal size="1.5em" />
            </Icon>
          )}
        </div>
      </Info>
    </Wrapper>
  )
}

Project.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Project.defaultProps = {
  className: '',
}

Project.Group = Group
Project.Heading = Heading

export default Project

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const ImageContainer = styled.figure`
  height: 400px;
  min-width: 100%;
  margin-right: 2em;
  border-radius: 0.5rem;
  overflow: hidden;

  @media (min-width: 1024px) {
    min-width: 23em;
    max-width: 23em;
  }
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

const Info = styled.section``

const Tech = styled.p`
  font-size: 0.8em;
  margin-bottom: 1.5em;
`

const Title = styled(Subtitle).attrs({ as: 'h1' })`
  font-weight: 600;
  margin-bottom: 0;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grays.dark};
  margin-bottom: 1.5em;
  margin-top: 0;
`

const Icon = styled.a`
  color: ${({ theme }) => theme.colors.grays.dark};
  position: relative;
  &:after {
    background: ${({ theme }) => theme.colors.black};
    border-radius: 4px;
    color: white;
    content: attr(data-tooltip);
    font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
    font-size: 0.8em;
    left: 0;
    padding: 0.5em 0.8em;
    position: absolute;
    top: 100%;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;

    pointer-events: none;
    opacity: 0;
    transform: translateY(2em);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    &:after {
      opacity: 1;
      transform: translateY(1em);
    }
  }
`
