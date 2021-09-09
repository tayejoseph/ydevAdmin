import Styled from 'styled-components'

export default Styled.div`
    color: #fff;
    box-shadow: 0px 0px 97.9127px rgba(0, 0, 0, 0.05);
    border-radius: 12.5299px;
    padding: 1em;
    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        color: #fff;
        height: 2.5rem;
        p {
            font-weight: 400;
            width: 50%;
            max-width: 10rem;
            font-size: 0.85rem;
        }
        .icon {
            font-size: 1.2rem;
        }
    }
    h1 {
        font-weight: 600;
        font-size: 1.8rem;
        color: #fff;
    }
    div.last--content {
        height: 3rem;
    }
    &:first-of-type {
        background-color: #28C76F;
    }
    &:nth-child(2) {
        background-color: ${({ theme }) => theme.primary};
    }
    &:nth-child(3) {
        background-color: #021F4F;
    }

`
