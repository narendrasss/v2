import styled from 'styled-components'
import Subtitle from '@elements/Subtitle'

const Heading = styled(Subtitle).attrs({ as: 'h1' })`
  margin-bottom: 1em;
  width: 100%;
`

export default Heading
