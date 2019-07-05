import React from 'react'
import AlgLayout from '@components/AlgLayout'
import Title from '@elements/Title'

export default () => {
  return (
    <AlgLayout>
      <Title>Algorithms</Title>
      <p
        css={`
          margin-bottom: 1em;
        `}
      >
        Welcome to algorithms!
      </p>
      <p>
        This page contains a list of my solutions to different leet code
        algorithmic problems. Each solution contains the problem description,
        big-O runtime, leetcode runtime, leetcode memory usage and their
        corresponding percentiles.
      </p>
    </AlgLayout>
  )
}
