import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    display: grid;
    flex: 1;
    height: 100%;
    ${minQuery('lg')} {
        grid-template-columns: auto auto;
    }
    div.col--1 {
        /* background: blue; */
    }
    div.action--group {

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        /* background: pink; */
        padding-bottom: 3em;
        transform: translateX(-150%);
        button {
            border: none;
            background: transparent;
            text-align: left;
            position: relative;
            display: flex;
            align-items: center;
            font-size: 1rem;
            cursor: pointer;
            &:not(:last-of-type) {
                margin-bottom: 0.5em;
            }
            &:before {
                /* position: absolute; */
                content: "";
                margin-right: 0.5em;
                width: 15px;
                height: 15px;
                display: block;
                border-radius: 50%;
                border: 4px solid attr(data-color);
            }
        }
    }
`
