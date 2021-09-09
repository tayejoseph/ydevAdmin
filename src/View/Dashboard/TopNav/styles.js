import Styled from 'styled-components'

export default Styled.div`
    display: grid;
    grid-template-columns: 1fr 20rem;
    align-items: center;
    height: 100%;
    border-bottom: 1.5px solid ${({ theme }) => theme.bgColor};
    div.col--1 {
        div.searchInput--container {
            max-width: 30rem;
            margin: 0 auto;
        }
    }
    div.action--tray {
        display: flex;
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
                    font-size: 1rem;
                }
            }
        }
    }

`
