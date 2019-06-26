import styled from 'styled-components'

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 1fr 1fr;
  }
`

export default Group
