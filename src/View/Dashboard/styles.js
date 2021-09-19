import Styled from 'styled-components'
import { maxQuery, minQuery } from '../../helpers'

export default Styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: fixed;
    overflow-y: auto;
    top: 0px;
    left: 0px;
    ${minQuery('>xl')} {
        display: grid;
        grid-template-columns: 18rem 1fr;
    }
    div.dash--side__nav {
        height: 100vh;
        ${maxQuery('xl')} {
            transform: translateX(-100vw);
            position: fixed;
            transition: all 0.9s;
            width: 20rem;
            z-index: 999;
            &::before {
                content: "";
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100vw;
                height: 100vh;
                z-index: -1;
                background: rgba(3, 35, 46, 0.24);
                backdrop-filter: blur(0.7px);
            }
            &.show--nav {
                transform: translateX(0);
            }
        }
    }
    main.dashboard--main {
        flex: 1;
        div.dashboard--top__nav {

        }
        div.dashboard--top__nav {
            height: ${({ theme }) => theme.dimensions.navHeight};
            background: #FFFFFF;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        }
        div.dashboard--content {
            overflow-y: auto;
            flex: 1;
            padding: 1em 1.5em;
            height: ${({ theme }) =>
              `calc(100vh - ${theme.dimensions.navHeight})`};
        }
    }
`
