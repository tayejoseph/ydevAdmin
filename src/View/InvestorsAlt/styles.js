import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    padding-bottom: 2em;
    form {
        margin-top: 2em;
        div.input--row {
            display: grid;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
                grid-gap: 2em;
            }
        }
        h3 {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.darkBlue};
            font-weight: 600;
        }
        header {
            padding: 1em 0px;
            padding-bottom: 0.8em;
            background: #fff;
            margin-bottom: 1em;
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
            border-radius: 10px;
            h3 {
                border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
                margin-bottom: 1em;
                padding-bottom: 0.8em;
                padding-left: 1em;
            }
            div.input--group {
                padding: 0px 1em;
            }
        }
        section {
            padding-bottom: 4em;
            margin: 0px;
            &:not(:last-of-type){
                border-bottom: 1px solid #000000;
            }
            &:not(:first-of-type) {
                padding-top: 4em;
            }
            h3 {
                margin-bottom: 1.5em;
            }
        }
    }
`
