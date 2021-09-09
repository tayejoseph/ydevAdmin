import Styled from 'styled-components'
import { rgba } from 'polished'

export default Styled.div`
    width: 100%;
    form {
        display: flex;
        position: relative;
        align-items: center;
        height: ${({ height }) => height};
        width: 100%;
        input {
            width: 100%;
            height: 100%;
            mix-blend-mode: normal;
            opacity: 0.05;
            border: 1.5px solid ${rgba('#000000', 0.3)};
            box-sizing: border-box;
            border-radius: 32px;
            color: #08225E;
            opacity: 0.5;
            padding-left: 2.5em;
            &:active, &:focus {
                outline: none;
                border: 1.5px solid ${({ theme }) => theme.primary};
            }
        }
        button {
            position: absolute;
            left: 1em;
            top: 50%;
            transform: translateY(-50%);
            svg {
                font-size: 0.9rem;
            }
        }
    }
`
