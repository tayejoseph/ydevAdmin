import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    margin-bottom: 1.5em;
    margin-top: 2em;
    display: grid;
    grid-gap: 1em;
    ${minQuery('lg')} {
        grid-template-columns: 1fr auto;
        
    }
    nav {
        padding-top: 1em;
        color: #A3A3A3;
        font-size: 0.9rem;
         a {
             color: #A3A3A3;
             cursor: pointer;
             font-size: 0.9rem;
             &:hover, &:focus {
                 text-decoration: underline;
                 color: ${({ theme }) => theme.primary};
             }
         }
    }
    h1 {
        font-weight: 600;
        font-size: 1.5rem;
    }

`
