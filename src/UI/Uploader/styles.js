import Styled from 'styled-components'

export default Styled.div`
    label {
        display: flex;
        flex-direction: column;
        padding: 2.5em 0px;
        padding-top: 1em;
        align-items: center;
        background: #fff;
        border-radius: 5px;
        svg {
            font-size: 2.5rem;
        }
        span {
            font-size: 1rem;
            margin-top: 0.5em;
        }
        span.inner--span {
            color: ${({ theme }) => theme.primary};
            text-decoration: underline;
        }
        input {
            visibility: hidden;
        }
    }

`
