import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    display: grid;
    grid-gap: 1.5em;
    background: ${({ theme }) => theme.bgColor};
    padding-top: 1em;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 22rem;
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
        height: 28rem;
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.03);
        border-radius: 5px;
    }
    div.col--1 {
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            div.ant-picker {
                background: rgba(2, 31, 79, 0.05);
                border-radius: 6px;
            }
        }
        div.content--item {
            div.transaction--lists {
                height: 20rem;
                padding-top: 0.8em;
                overflow-y: auto;
                ${({ theme }) => theme.mixins.scrollbar};
                div.transaction--item {
                    display: grid;
                    align-items: center;
                    padding: 0px 2em;
                    margin: 0.8em 0px;
                    position: relative;
                    grid-template-columns: 3rem 1fr 1fr;
                    &:first-of-type {
                        margin-top: 0px;
                    }
                    svg {
                        font-size: 2rem;
                    }
                    p {
                        font-size: 0.9rem;
                        &:first-of-type {
                            font-weight: 600;
                            color: ${({ theme }) => theme.colors.darkBlue};
                        }
                        &:last-of-type {
                            color: rgba(0, 0, 0, 0.3);
                            font-size: 0.8rem;
                            font-weight: 300;
                        }
                    }
                    div.right--column {
                        text-align: right;
                    }
                    &.active {
                        &:before {
                            content: "";
                            position: absolute;
                            width: 4px;
                            top: 0px;
                            left: 0px;
                            height: 100%;
                            background: ${({ theme }) => theme.primary};
                        }
                    }
                }
            }
            footer {
                margin-top: 1em;
                display: flex;
                justify-content: flex-end;
                padding-right: 1em;
            }

        }
    }
    div.col--2 {
        div.content--item {
            padding: 1em 2em;
            div.transaction--details {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
                svg {
                    font-size: 5rem;
                }
                div:first-of-type {
                    margin: 2em 0px;
                    p {
                        font-size: 0.8rem;
                        font-weight: 600;
                        color: ${({ theme }) => theme.colors.darkBlue};
                    }
                }
                div:last-of-type {
                    h1 {
                        font-size: 1.5rem;
                        font-weight: 600;
                        line-height: 100%;
                        color: ${({ theme }) => theme.colors.darkBlue};
                    }
                    p {
                        font-size: 0.75rem;
                        color: rgba(0, 0, 0, 0.3);
                    }
                }
            }
            div.detail--container {
                margin-top: 2.5em;
                div.detail--item {
                    display: grid;
                    grid-gap: 1.5em;
                    margin-bottom: 1em;
                    max-width: 30rem;
                    ${minQuery('md')} {
                        grid-template-columns: 1fr 1fr;
                    }
                    p {
                        font-size: 0.9rem;
                        color: #021F4F;
                        &:last-of-type {
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
`
