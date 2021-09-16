import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    form {
        margin-top: 2em;
        textarea {
            min-height: 14rem;
        }
        div.input--row {
            display: grid;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
                grid-gap: 2em;
            }
        }
    }
`