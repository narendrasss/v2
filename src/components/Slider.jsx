import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function Slider({ children, className, isOpen, onClose }) {
  if (isOpen) {
    return (
      <Container>
        <Cover onClick={onClose} />
        <Content className={className}>{children}</Content>
      </Container>
    )
  }
  return null
}

Slider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

Slider.defaultProps = {
  children: null,
  className: '',
}

export default Slider

const Container = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Cover = styled(Container)`
  z-index: -1;
  background: black;
  opacity: 0.5;
`

const Content = styled.div`
  z-index: 10;
  background: white;
  width: 80%;
  max-width: 30em;
  height: 100%;

  padding: 4em 2em;
`
