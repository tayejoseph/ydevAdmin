import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    padding-top: 1em;
    display: grid;
    background: ${({ theme }) => theme.bgColor};
    div.custom--container  {
        margin-bottom: 0em;
    }
    section.first--section {
        display: grid;
        grid-gap: 1.5em;
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
            padding-top: 2em;
            padding-bottom: 2em;
        }
        div.col--1 {
            div.item--row {
                display: grid;
                margin-bottom: 1.5em;
                grid-gap: 1em;
                ${minQuery('md')} {
                    grid-template-columns: 1fr 1fr;
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
        }
        div.col--2 {
            div.content--item {
                display: grid;
                grid-gap: 1.5em;
                ${minQuery('md')} {
                    grid-template-columns: 13rem 1fr;
                    grid-gap: 4em;
                }
                div.card--col__1 {
                    display: grid;
                    grid-gap: 1em;
                    div.card--item {
                        position: relative;
                        svg {
                            font-size: 13rem;
                        }
                        div.card--details {
                            position: absolute;
                            top: 20%;
                            left: 2em;
                            p {
                                &:first-of-type {
                                    color: #ffffff;
                                    font-weight: 300;
                                    font-size: 0.8rem;
                                    letter-spacing: 0.3em;
                                    margin-bottom: 1em;
                                }
                                &:last-of-type {
                                    color: #ffff;
                                    font-size: 1rem;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }
                div.card--col__2 {
                    div.card--item {
                        display: grid;
                        margin-bottom: 1em;
                        grid-gap: 1em;
                        ${minQuery('md')} {
                            grid-template-columns: 1fr 1fr;
                        }
                        p {
                            font-size: 0.9rem;
                            color: #021F4F;
                            &:last-of-type {
                                font-weight: 600;
                                color: ${({ theme }) => theme.colors.darkBlue};
                            }
                        }

                        &.status--row {
                            p:last-of-type {
                                width: fit-content;
                                padding: 0.2em 0.5em;
                                font-size: 0.8rem;
                                font-weight: 400;
                            }
                        }
                    }
                }
            }
        }
    }
`
