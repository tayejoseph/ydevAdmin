import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0px;
    top: 0px;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 1fr;
    }
    div.col--1 {
        ${maxQuery('<lg')} {
            display: none;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.primary};
        header {
            position: absolute;
            top: 0em;
            left: 2em;
            svg {
                font-size: 10rem;
            }
        }
        div.content--container {
            svg {
                font-size: 22rem;
            }
        }
    }
    div.col--2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div.form--container {
            width: 65%;
            header {
                h2 {
                    font-size: 1.1rem;
                }
                h1 {
                    font-size: 1.5rem;
                    margin-bottom: 1.5em;
                    font-weight: 500;
                }
            }
            div.forgot--password__container {
                text-align: right;
                margin-bottom: 1.5em;
                a {
                    font-size: 0.9rem;
                    font-weight: 400;
                    color: ${({ theme }) => theme.primary};
                    &:hover, &:focus {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`
