import Styled from 'styled-components'
import { rem } from 'polished'
import { maxQuery, minQuery } from '../../../helpers'

export default Styled.div`
    display: grid;
    grid-template-columns: 1fr 20rem;
    align-items: center;
    height: 100%;
    width: 95%;
    max-width: ${({ theme }) => `calc(${theme.dimensions.maxWidth})`};
    margin: 0 auto;
    border-bottom: 1.5px solid ${({ theme }) => theme.bgColor};
    position: relative;
    div.col--1 {
        button.toggle--btn {
            ${maxQuery('<xl')} {
                top: 0px;
                .icon {
                    font-size: 2rem;
                }
            }
            ${minQuery('xl')} {
                display: none;
            }

        }
        div.searchInput--container {
            display: none;
            ${minQuery('>xl')} {
                display: block;
                max-width: 30rem;
                margin: 0 auto;
            }
        }
    }
    div.action--tray {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button {
            &.nofication--btn {
                margin-right: 1.5em;
                .icon {
                    font-size: 1.5rem;
                    color: #021F4F;
                    /* stroke-width: 0;
                    stroke: #021F4F; */
                }
            }
            &.profile--btn {
                background: transparent;
                cursor: pointer;
                border: none;
                display: flex;
                grid-gap: 0.5em;
                align-items: center;
                font-size: 0.9rem;
                color: #021F4F;
                span.img--container {
                    display: inline-block;
                    background: blue;
                    height: 2rem;
                    margin-right: 0.5em;
                    width: 2rem;
                    border-radius: 50%;
                }
                .icon {
                    color: #1565E8;
                    transition: all 0.5s;
                    font-size: 1rem;
                    stroke-width: 10px;
                }
                &.show--popup {
                    .icon {
                        transform: rotate(180deg);
                    }
                }
            }
        }
        div.popup--container {
            position: absolute;
            background: #fff;
            top: 3.5rem;
            border-radius: 4px;
            width: ${rem('195px')};
            background: #FFFFFF;
            overflow: hidden;
            box-shadow: 0px 1px 6px #00000029; 
            nav {
                padding: 0.2em 1em;
                ol {
                    padding: 0px;
                    margin: 0px;
                    list-style: none;
                    li {
                        display: flex;
                        cursor: pointer;
                        padding: 0px;
                        align-items: center;
                        padding-left: 1em;
                        padding: 0.8em 0px;
                        .icon {
                            font-size: 1.4rem;
                            margin-right: 0.7em;
                            color: ${({ theme }) => theme.primary}
                        }
                    &:not(:last-child) {
                        border-bottom: 1px solid #00000025;
                    }
                    &:hover {
                        color: ${({ theme }) => theme.secondary}
                    }
                    }
                }
            }
        }
    }

`
