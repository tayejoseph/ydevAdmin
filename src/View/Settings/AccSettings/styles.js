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
        /* margin-bottom: 2em; */
        header {
            display: flex;
            justify-content: space-between;
            border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
            padding: 1.5em;
            align-items: center;
            h1 {
                font-size: 1.1rem;
                font-weight: 600;
                color: #021F4F;
            }
        }
        form {
            padding: 0em 1.5em;
            padding-bottom: 3em;
            div.input--group {
                max-width: 50rem;
                margin-bottom: 2em;
                label {
                    font-weight: 300;
                }
            }
            div.section--group {
                display: grid;
                grid-gap: 1.5em;
                ${minQuery('md')} {
                    margin-bottom: 3em;
                    grid-template-columns: 1fr 1fr;
                    max-width: 55rem;
                }
                p {
                    font-size: 1rem;
                    color: #021F4F;
                }
                div.select--group {
                    display: grid;
                    grid-gap: 1em;
                    label {
                        display: flex;
                        align-items: center;
                        grid-gap: 1em;
                        color: #021F4F;
                        font-size: 1.1rem;
                    }
                }
            }
            div.email--group {
                div.section--group {
                    &:not(:first-of-type) {
                        margin-top: -2em;
                    }
                }
            }
        }
    }
`
