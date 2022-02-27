import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    div.section--header {
        div.bottom--nav {
            display: grid;
            align-items: center;
            grid-template-columns: auto 1fr;
            grid-gap: 2em;
            div.input--group {
                margin-bottom: 0px;
                max-width: 20rem;
            }
        }
    }
    div.pallet--grid__container {
        display: grid;
        grid-gap: 1.5em;
        ${minQuery('md')} {
            grid-template-columns: 1fr 1fr;
        };
        ${minQuery('lg')} {
            grid-template-columns: repeat(3, 1fr);
        }
        div.pallet--item {
            background: #FFFFFF;
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
            border-radius: 10px;
            padding: 1.5em 1.5em;
            h1 {
                font-weight: 700;
                font-size: 2rem;
                color: #021F4F;
            }
            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 0.1em;
                p {
                    width: 50%;
                    max-width: 10rem;
                    font-size: 1rem;
                    line-height: 120%;
                    white-space: pre-line;
                }
                svg {
                    font-size: 3rem;
                }
            }
        }
    }
    div.help--detail {
        width: 30rem;
    }
`
