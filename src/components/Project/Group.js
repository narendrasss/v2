import styled from 'styled-components'

const Group = styled.section`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 4em;
  }

  @media (min-width: 1024px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
`

export default Group
