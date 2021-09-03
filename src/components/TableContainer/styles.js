import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    margin: 1.5em 0px;
    header.table--header {
        padding: 1em 1.5em;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
        h1 {
            font-size: 1.1rem;
            font-weight: 600;
        }
    }
    div.grid--container {
        display: grid;
        grid-gap: 1em;
        width: 100%;
        padding: 1em 1.5em;
        ${minQuery('lg')} {
            grid-template-columns: auto auto;
        }
        div.header--action {
            display: flex;
            align-items: center;
            grid-gap: 0.5em;
            p {
                font-size: 0.9rem;
            }
        }
        form {
            display: flex;
            flex: 1;
            height: 2.5rem;
            grid-gap: 1.5em;
            align-items: center;
            ${minQuery('lg')} {
                justify-content: flex-end;
            }
            div.input--container {
                input {    
                    flex: 1;
                    width: 100%;
                    ${minQuery('lg')} {
                        width: 20rem;
                    }
                    font-size: 1rem;
                    height: 2.5rem;
                    outline: none;
                    background: rgba(2, 31, 79, 0.05);
                    border-radius: 6px;
                    padding-left: 0.5em;
                    border: 1px solid rgba(2, 31, 79, 0.05);
                    &:focus, &:active {
                        border: 1px solid ${({ theme }) => theme.primary};
                    }
                }
            }
            button {
                display: block;
                color: ${({ theme }) => theme.primary};
                border: 1px solid ${({ theme }) => theme.primary};
                border-radius: 4px;
                padding-left: 1em;
                padding-right: 1em;
                font-weight: 500;
                font-size: 0.8rem;
                height: 2.5rem;
                background-color: transparent!important;
            }
        }
    }
    ul.ant-pagination {
        padding: 1em;
        padding-right: 2em;
    }
`
