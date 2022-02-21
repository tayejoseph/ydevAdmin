import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    h1 {
        font-size: 1rem;
        color: #021F4F;
        font-weight: 600;
    }
    div.content--container {
        padding: 1em;
        height: 20rem;
    }
    header.palletItem-header {
        display: flex;
        grid-gap: 1em;
        padding: 0.8em 1em;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
        ${maxQuery('md')} {
            flex-direction: column;
        }
    }
`
