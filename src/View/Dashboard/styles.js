import Styled from 'styled-components'

export default Styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: fixed;
    overflow-y: auto;
    top: 0px;
    left: 0px;
    display: grid;
    grid-template-columns: 18rem 1fr;
    div.dash--side__nav {
        height: 100vh;
        background: ${({ theme }) => theme.primary};
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
