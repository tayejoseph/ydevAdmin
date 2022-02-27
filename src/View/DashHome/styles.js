import Styled from 'styled-components'
import { rgba } from 'polished'
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

        div.graph-header {
            div.input--group {
                margin: 0px;
            }
        }
        ${minQuery('md')} {
            /* grid-template-columns: 1fr 1fr;
            div.full--span {
                grid-column: 1 / 3;
            } */
        }
        div.activities--container {
            div.content--container {
                padding-right: 0px;
                padding-top: 0.5em;
            }
        }
        div.active--trail {
            height: 18rem;
            padding-top: 1em;
            padding-right: 1em;
            overflow-y: auto;
            ${({ theme }) => theme.mixins.scrollbar};
            div.recent--activity {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5em;
                position: relative;
                padding-left: 1.2em;
                &::before {
                    content: "";
                    height: 0.6em;
                    width: 0.6em;
                    display: block;
                    z-index: 1;
                    left: 0px;
                    top: 50%;
                    transform: translateY(-50%);
                    position: absolute;
                    border-radius: 50%;
                    background-color: ${({ theme }) => theme.primary};
                }
                &:not(:last-child) {
                    &::after {
                        content: "";
                        height: 3em;
                        width: 0.08em;
                        display: block;
                        left: 0.25em;
                        top: 60%;
                        position: absolute;
                        background-color: ${({ theme }) =>
                          rgba(theme.primary, 0.1)};
                    }
                }
                p {
                    font-size: 0.9rem;
                }
            }
        }
    }
    div.loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    div.empty-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
        svg {
            font-size: 4rem;
        }
        p {
            font-size: 0.9rem;
            line-height: 110%;
            margin-top: 1em;
            max-width: 18rem;
            text-align: center
        }
    }
`
