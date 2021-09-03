import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
    box-shadow: 0px 1px 10px #00000005;
    width: 100%;
    div.tab--header {
    border-top: 1px solid #F1F1F1;
    border-bottom: 1px solid #F1F1F1;
      nav {
        display: flex;
        padding: 1.2em 0px;
        max-width: 35rem;
        margin: 0 auto;
        div.tab--item {
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          user-select: none;
          a {
            padding: 0px;
            font-weight: 400;
            font-size: 1rem;
            ${maxQuery('sm')} {
              font-size: 0.9rem;
            }
            color: #000000;
            text-decoration: none;
            text-transform: capitalize;
            &.active {
              color: ${({ theme }) => theme.primary};
              &:after {
                bottom: -1.3em;
                left: 0px;
                content: '';
                position: absolute;
                height: 2px;
                background: ${({ theme }) => theme.primary};
                width: 100%;
              }
            }
          }
        }
      }
    }
  
        
`
