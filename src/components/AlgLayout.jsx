import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { RightArrowAlt } from 'styled-icons/boxicons-regular'
import BaseLayout from '@components/Layout'
import AlgNav from '@components/AlgNav'
import Slider from '@components/Slider'
import Title from '@elements/Title'

function AlgLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const onClose = () => setIsNavOpen(false)

  return (
    <Layout>
      <Slider isOpen={isNavOpen} onClose={onClose}>
        <Title>Problems</Title>
        <AlgNav />
      </Slider>
      <ViewAlgorithms type="button" onClick={() => setIsNavOpen(true)}>
        View all algorithms
        {` `}
        <RightArrowAlt size="1.5em" />
      </ViewAlgorithms>
      <Aside>
        <AlgNav
          css={`
            grid-row: 2;
          `}
        />
      </Aside>
      <Content>{children}</Content>
    </Layout>
  )
}

AlgLayout.propTypes = {
  children: PropTypes.node,
}

AlgLayout.defaultProps = {
  children: null,
}

export default AlgLayout

const Layout = styled(BaseLayout)`
  grid-auto-rows: min-content;

  @media (min-width: 1053px) {
    display: grid;
    grid-template-columns: 15vw 1fr 1.5fr 15vw;
  }
`

const ViewAlgorithms = styled.button`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.grays.dark};
  outline: 0;
  background: none;
  cursor: pointer;
  border: none;
  width: auto;

  @media (min-width: 1053px) {
    display: none;
    pointer-events: none;
  }
`

const Content = styled.article`
  @media (min-width: 1053px) {
    grid-column: 3;
    display: grid;
    grid-template-rows: 8em 1fr;
  }
`

const Aside = styled.aside`
  display: grid;
  grid-template-rows: 8em 1fr;
  margin-right: 3em;
`
