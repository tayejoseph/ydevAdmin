import Styled from 'styled-components'

export default Styled.div`
    background: ${({ theme }) => theme.primary};
    header {
        display: flex;
        align-items: center;
        padding-left: 3em;
        /* justify-content: center; */
        border-bottom: 0.05px solid #FFFFFF;
        height: ${({ theme }) => theme.dimensions.navHeight};
        svg {
            font-size: 4rem;
            /* height: 2rem; */
        }
    }
    nav {
        ${({ theme }) => theme.mixins.scrollbar};
        min-height: ${({ theme }) =>
          `calc(100vh - ${theme.dimensions.navHeight})`};
        padding-top: ${({ theme }) => theme.dimensions.dashTopPadding};
        padding-left: 1em;
        a.menu {
            display: grid;
            padding: 0.5em 0px;
            font-size: 1rem;
            margin-bottom: 1em;
            color: #FFFFFF;
            padding-left: 1em;
            align-items: center;
            grid-template-columns: 3rem 1fr 3rem;
            .icon {
                /* transition: all 1s; */
            }
            &.active {
                background: #F4F8FE;
                color: ${({ theme }) => theme.primary};
                border-top-left-radius: 10rem;
                border-bottom-left-radius: 10rem;
                position: relative;
                svg {
                    * {
                        stroke: ${({ theme }) => theme.primary};
                    }
                }
                .icon {
                    /* transform: rotate(90deg); */
                }
            }
        }
        hr {
            border: none;
            border-bottom: 0.05px solid #FFFFFF;
        }
        div.submenu {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 16px;
            text-align: left;
            padding: 0.5em 0px;
            margin-right: 0.7em;
            margin-bottom: 2em;
            pointer-events: none;
            position: relative;
            z-index: -1;
            opacity: 0;
            height: 0px;
            margin: 0px;
            padding: 0px;
            &.visible {
                opacity: 1;
                z-index: 1;
                pointer-events: auto;
                height: fit-content;
                padding: 0.5em 0px;
                margin-right: 0.7em;
                margin-bottom: 2em;
            }
            a {
                display: block;
                color: #AECDFF;
                user-select: none;
                padding: 0.8em 0px;
                font-size: 0.9rem;
                padding-left: 4.5em;
                font-weight: 300;
                transition: all 0.3s;
                &.active, &:focus, &:hover {
                    color: #FFFFFF;
                    font-weight: 500;
                }
                a::after {
                    display: block;
                    content: attr(title);
                    font-weight: 500;
                    height: 1px;
                    color: transparent;
                    overflow: hidden;
                    visibility: hidden;
                }
            }
        }
    }
`
