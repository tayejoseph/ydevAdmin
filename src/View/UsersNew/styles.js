import Styled from 'styled-components'
import { rgba } from 'polished'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    padding-bottom: 4em;
    form {
        margin-top: 2em;
        section {
            h2 {
                font-size: 1.4rem;
                font-weight: 600;
                color: ${({ theme }) => theme.primary};
                margin-bottom: 1em;
            }
            &:not(:first-of-type) {
                padding-top: 2em;
            }
            &:not(:last-of-type) {
                border-bottom: 1px solid ${rgba('#000000', 0.15)};
            }
            padding-bottom: 5em;
            div.input--row {
                display: grid;
                ${minQuery('lg')} {
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 4em;
                }
            }
            div.upload--row {
                ${maxQuery('lg')} {
                    grid-gap: 1.6em;
                }
            }
        }
    }
`
