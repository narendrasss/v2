/* eslint-disable react/jsx-filename-extension */
const React = require('react')
const { ThemeProvider } = require('styled-components')
const { GlobalStyle, theme } = require('./src/style')

// eslint-disable-next-line react/prop-types
exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {element}
      </>
    </ThemeProvider>
  )
}
