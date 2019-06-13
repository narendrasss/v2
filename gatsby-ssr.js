/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './src/style'

// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {element}
      </>
    </ThemeProvider>
  )
}
