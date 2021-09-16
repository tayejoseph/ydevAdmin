import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    padding-bottom: 2em;
    form {
        margin-top: 2em;
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
        div.section--container {
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
            border-radius: 10px;
            margin-bottom: 2.5em;
            section {
                background: #fff;
                padding: 2em;
                margin: 0px;
                &:not(:last-of-type) {
                    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
                }
                h3 {
                    margin-bottom: 1.5em;
                }
                div.input--group {
                    label {
                        color: #021F4F;
                    }
                    ${minQuery('lg')} {
                        display: grid;
                        grid-template-columns: 10rem 1fr;
                        grid-gap: 1em;
                        label {
                            width: 9rem;
                            display: flex;
                            justify-content: flex-end;
                            text-align: right!important;
                        }
                    }
                    &:last-of-type {
                        margin-bottom: 0px;
                    }
                }
            }
        }
    }
`
