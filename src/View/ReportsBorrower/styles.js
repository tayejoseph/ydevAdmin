import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    padding-bottom: 2em;
    form {
        margin-top: 2em;
        h3 {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.darkBlue};
            font-weight: 600;
        }
        section {
            padding: 1em 0px;
            padding-bottom: 0.8em;
            background: #fff;
            margin-bottom: 1em;
            box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.03);
            border-radius: 10px;
            header {
                padding: 0px 1.5em;
                h3 {
                    margin-bottom: 1em;
                }
                border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

            }
            div.content--container {
                padding: 1em 1.5em;
                padding-top: 1.5em; 
                div.date--range__container {
                    text-align: center;
                    ${minQuery('md')} {
                        display: grid;
                        grid-template-columns: 1fr 3rem 1fr;
                        align-items: center;
                        margin-bottom: 1.8em;
                        div.input--group {
                            margin-bottom: 0px;
                        }
                    }
                    ${maxQuery('<md')} {
                        p {
                             margin-bottom: 1.5em;
                        }
                    }
                }
                div.action__btn--group {
                    display: flex;
                    grid-gap: 1.5em;
                }
            }
            div.radio--row {
                ${minQuery('md')} {
                    display: flex;
                    grid-gap: 1.5em;
                }
                label {
                    display: flex;
                    grid-gap: 1em;
                    align-items: center;
                }
            }
        }
    }
`
