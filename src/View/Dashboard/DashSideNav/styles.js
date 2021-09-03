import Styled from 'styled-components'

export default Styled.div`
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 0.05px solid #FFFFFF;
        height: ${({ theme }) => theme.dimensions.navHeight};
        svg {
            font-size: 10rem;
            height: 2rem;
        }
    }
    nav {
        padding-top: ${({ theme }) => theme.dimensions.dashTopPadding};
        padding-left: 1em;
        a {
            display: grid;
            padding: 0.5em 0px;
            font-size: 1rem;
            margin-bottom: 1em;
            color: #FFFFFF;
            padding-left: 1em;
            align-items: center;
            grid-template-columns: 3rem 1fr 3rem;
            &.active {
                background: #F4F8FE;
                color: ${({ theme }) => theme.primary};
                border-top-left-radius: 10rem;
                border-bottom-left-radius: 10rem;
                svg {
                    * {
                        stroke: ${({ theme }) => theme.primary};
                    }
                }
            }
        }
        hr {
            border: none;
            border-bottom: 0.05px solid #FFFFFF;
        }
    }
`
