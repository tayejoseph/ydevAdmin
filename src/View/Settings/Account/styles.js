import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    form {
        margin-top: 2em;
        div.input--row {
            ${minQuery('lg')} {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 2em;
            }
        }
    }
    section {
        background: #fff;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.03);
        border-radius: 5px;
        padding: 2em;
        /* margin-bottom: 2em; */
     
    }
       h3 {
            margin-top: 2em;
            font-size: 1.2rem;
            color: ${({ theme }) => theme.primary};
            margin-bottom: 1.5em;
        }
`
