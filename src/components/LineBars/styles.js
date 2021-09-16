import Styled from 'styled-components'

export default Styled.div`
    display: grid;
    grid-gap: 1.5em;
    div.bar--item {
        div.top--container {
            display: flex;
            justify-content: space-between;
            h3 {
                font-size: 0.9rem;
            }
            p {
                font-size: 0.9rem;
                color: #021F4F;
            }
        }
    }
`

export const ItemContainer = Styled.div`
    height: 1.5rem;
    margin-top: 0.25em;
    background: rgba(204, 204, 204, 0.3);
    position: relative;
    &:after {
        content: "";
        position: absolute;
        top: 0px;
        height: 1.5rem;
        left: 0px;
        background-color: ${({ color }) => color};
        width: ${({ percentage }) => percentage};
    }
`
