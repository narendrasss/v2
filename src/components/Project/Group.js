import styled from 'styled-components'

const Group = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  > * {
    margin-bottom: 4em;
  }

  @media (min-width: 1053px) {
    > * {
      margin-bottom: 0;
    }
  }
`

export default Group
