import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    padding-bottom: 2em;
    form {
        margin-top: 2em;
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
                        p.error-msg {
                            margin-left: 11rem;
                            width: 100%;
                            flex: 1;
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
