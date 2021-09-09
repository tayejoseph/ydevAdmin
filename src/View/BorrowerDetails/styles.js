import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    div.component--header {
        header.pallet--header {
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.03);
            border-radius: 5px;
            overflow: hidden;
            background: #FFFFFF;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.03);
            border-radius: 5px;
            &:before {
                content: "";
                width: 100%;
                display: block;
                height: 8rem;
                background: linear-gradient(288.94deg, #021F4F 18.43%, #1669F0 253.58%);
            }
            div.row--item {
                display: grid;
                grid-gap: 1.5em;
                position: relative;
                padding: 0em 1.5em;
                padding-top: 1.5em;
                ${minQuery('lg')} {
                    grid-template-columns: 13rem 1fr auto;
                }
                 div.profile--img {
                    width: 9rem;
                    height: 9rem;
                    transform: translate(40%, calc(-50% - 2em));
                    background: blue;
                    border-radius: 50%;
                    border: 4px solid #fff;
                }
                div.profile--details {
                    h2 {
                        font-weight: 700;
                        font-size: 1.6rem;
                        color: #021F4F;
                    }
                    p {
                        font-size: 1rem;
                    }
                }
                div.action--container {
                    display: grid;
                    grid-gap: 1em;
                    grid-template-columns: 1fr 1fr;
                    align-items: flex-start;
                }
            }
            div.ant-tabs {
                margin-top: -2em;
                position: relative;
                z-index: 2;
            }
            div.ant-tabs-nav-wrap {
                padding-left: 2.5em;
            }
            div.ant-tabs-content-holder {
            }
            .ant-tabs-top > .ant-tabs-nav, .ant-tabs-bottom > .ant-tabs-nav, .ant-tabs-top > div > .ant-tabs-nav, .ant-tabs-bottom > div > .ant-tabs-nav {
                margin: 0px;
            }
            div.bottom--row {
                background: #fff;
                display: grid;
            }
        }
    }
`
