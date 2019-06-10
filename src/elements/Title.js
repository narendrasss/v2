import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => (theme ? theme.colors.black : `#292a2c`)};
  font-size: 4.5em;
`

export default Title
