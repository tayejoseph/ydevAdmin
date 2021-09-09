import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    display: grid;
    grid-gap: 1.5em;
    background: ${({ theme }) => theme.bgColor};
    padding-top: 1em;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 1fr;
    }
    header {
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
        padding: 1em 2em;
        h2 {
            font-weight: 600;
            font-size: 1.1rem;
        }
    }
    div.col--1, div.col--2 {
        height: 25rem;
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.03);
        border-radius: 5px;
    }
    div.content--item {
        padding-left: 2em;
        padding-top: 1.5em;
        padding-bottom: 2em;
        div.item--row {
            display: grid;
            margin-bottom: 1em;
            grid-gap: 1em;
            ${minQuery('md')} {
                grid-template-columns: 8rem 1fr;
            }
            p {
                font-size: 0.9rem;
                color: #021F4F;
                &:last-of-type {
                    font-weight: 600;
                    color: #021F4F;
                }
            }
        }
        div.card--container {
            hgroup {
                p {
                    font-size: 0.9rem;
                    color: #021F4F;
                }
            }
            div.card--row {
                display: grid;
                grid-gap: 1em;
                margin-top: 2em;
                ${minQuery('md')} {
                    grid-template-columns: repeat(3, 8rem);
                }
                div.card--item {
                    border-radius: 13px;
                    padding: 1em;
                    background: rgba(127, 202, 159, 0.1);
                    color: #7FCA9F;
                    svg {
                        font-size: 1.5rem;
                        margin-bottom: 0.4em;
                    }
                    p {
                        font-size: 0.8rem;
                        &:first-of-type {
                            font-weight: 600;
                        }
                    }
                    &:first-of-type {
                        background: rgba(21, 99, 227, 0.1);
                        color: #1563E3;
                    }
                }
            }
        }
    }
`
