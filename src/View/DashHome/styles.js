import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    header.page--header {
        div.grid--container {
            display: grid;
            grid-gap: 1.2em;
            ${minQuery('md')} {
                grid-template-columns: 1fr 1fr;
            }
            ${minQuery('lg')} {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
    div.page--content {
        display: grid;
        margin-top: 3em;
        grid-gap: 1.5em;
        grid-template-columns: 1fr;
        ${minQuery('md')} {
            grid-template-columns: 1fr 1fr;
            div.full--span {
                grid-column: 1 / 3;
            }
        }
    }

`
