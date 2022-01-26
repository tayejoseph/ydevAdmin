import Styled from 'styled-components'
import { rgba } from 'polished'
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
    div.table--grid__container {
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
            grid-gap: 1.5em;
            div.col-1 {
                display: flex;
                align-items: center;
                position: relative;
                grid-gap: 0.5em;
                p {
                    font-size: 0.9rem;
                }
                button.display--btn {
                    display: flex;
                    padding: 0.5em;
                    padding-right: 0.9em;
                    padding-left: 0.9em;
                    align-items: center;
                    grid-gap: 0.5em;
                    span {
                        transition: 0.7s;
                        &.spin {
                            transform: rotate(180deg);
                        }
                        .icon {
                            transform: scale(1.4);
                        }
                    }
                }
            }
            div.menu--lists {
                position: absolute;
                top: 3rem;
                background: #fff;
                box-shadow: 0px 4px 20px rgba(163, 168, 190, 0.4);
                border-radius: 6px;
                width: 10rem;
                left: 0px;
                z-index: 999;
                button {
                    display: block;
                    border: none;
                    background: transparent;
                    padding: 1em;
                    width: 100%;
                    cursor: pointer;
                    &:hover, &:focus {
                        background: ${rgba('#0000', 0)};
                    }
                }
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
    div.table--container {
        overflow-x: auto;
        ${({ theme }) => theme.mixins.hideScollbarHorizontal};
        div.ant-table-wrapper {
            min-width: 50rem;
        }
    }

    div.action--container {
        display: flex;
        grid-gap: 1em;
        justify-content: center;
        svg {
            font-size: 1.2rem;
        }
    }
    ul.ant-pagination {
        padding: 1em;
        padding-right: 2em;
    }
    table {
        font-size: 0.9rem;
    }

    .badge--success, .badge--paid {
        background: rgba(0, 194, 83, 0.1);
        border-radius: 2px;
        color: #00C253;
        font-size: 0.8rem;
        padding: 0.5em;
    }
    .badge--pending {
        background: ${rgba('#FFE602', 0.5)};
        border-radius: 2px;
        color: black;
        font-size: 0.8rem;
        padding: 0.5em;
        text-transform: capitalize;
    }
    .badge--failed {
        background: rgba(255, 0, 0, 0.1);
        border-radius: 2px;
        color: #FF0000;
        font-size: 0.8rem;
        padding: 0.5em;
    }
    div.status--container {
        display: flex;
        align-items: center;
        /* background: #FFE602; */
        border-radius: 16px;
        width: fit-content;
        grid-gap: 0.5em;
        font-size: 0.8rem;
        padding: 0.25em 1em; 
    }
`
