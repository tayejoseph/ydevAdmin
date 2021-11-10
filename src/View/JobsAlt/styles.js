import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    padding: 3em 2em;
    padding-top: 0px;
    form {
        display: grid;
        grid-gap: 1em;
        margin-top: 3em;
        section {
            &:not(:first-of-type) {
                margin-bottom: 3em;
            }
        }

        section.top--section {
            display: grid;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
                column-gap: 3em;
            }
        }
        textarea {
            min-height: 2rem;
            height: 100%;
        }
        div.jobRole--container {
            h3 {
                font-size: 1rem;
                margin-bottom: 0.5em;
                color: ${({ theme }) => theme.primary};
            }
        }
        div.row--row {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: flex-start;
            grid-gap: 1.5em;
            button {
                display: flex;
                align-items: center;
                background: transparent;
                cursor: pointer;
                border: none;
                outline: none;
                grid-gap: 0.5em;
                &.trash--btn {
                    color ${({ theme }) => theme.colors.dangerDark};
                }
            }
            &:last-of-type {
                grid-gap: 0px;
                grid-template-columns: 1fr;
                button {
                    width: fit-content;
                    margin-top: 1em;
                }
            }
        }
    }
`
