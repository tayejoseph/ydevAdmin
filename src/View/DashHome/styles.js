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
            div.grid--item {
                color: #fff;
                box-shadow: 0px 0px 97.9127px rgba(0, 0, 0, 0.05);
                border-radius: 12.5299px;
                padding: 1em;
                div {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    color: #fff;
                    height: 2.5rem;
                    p {
                        font-weight: 400;
                        width: 50%;
                        max-width: 10rem;
                        font-size: 0.85rem;
                    }
                    .icon {
                        font-size: 1.2rem;
                    }
                }
                h1 {
                    font-weight: 600;
                    font-size: 1.8rem;
                    color: #fff;
                }
                div.last--content {
                    height: 3rem;
                }
                &:first-of-type {
                    background-color: #28C76F;
                }
                &:nth-child(2) {
                    background-color: ${({ theme }) => theme.primary};
                }
                &:nth-child(3) {
                    background-color: #021F4F;
                }
            }
        }
    }
    div.page--content {
        display: grid;
        margin-top: 3em;
        grid-gap: 1.5em;
        ${minQuery('md')} {
            grid-template-columns: 1fr 1fr;
        }
        div.full--span {
            grid-column: 1 / 3;
        }
    }

`
