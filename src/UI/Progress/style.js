import Styled from 'styled-components'

export default Styled.div`
    background: #F1F1F1;
    height: 0.5em;
    position: relative;
    margin-bottom: 1em;
    div.progress--scale {
        top: 0px;
        left: 0px;
        height: 100%;
        width: 40%;
        background: ${({ theme }) => theme.primary};
        position: absolute;
    }
`
