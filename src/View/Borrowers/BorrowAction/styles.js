import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    div.input--row {
        ${minQuery('lg')} {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1.5em;
        }
    }
`
