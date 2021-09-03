import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { maxQuery } from '../helpers'

export default createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
    }
      
    html, body {
      font-family: ${({ theme }) => theme.fontFamily};
      padding: 0px;
      margin: 0px;
      font-size: 1rem;
      background: ${({ theme }) => theme.bgColor};    
      ${maxQuery('sm')} {
        font-size: 95%;
      }
      /* ${maxQuery('md')} {
        width: 100vw;
        overflow-x: hidden;
      } */
    }
    html { 
      overflow-y: overlay;
      overflow-x: hidden;
      body {   
        &.disable--scroll {
          overflow: hidden;
        }
      }
      hr {
        border: none;
        border-bottom: 1px solid #E6E6E6;
      }
      h1, h2, h3, h4, p {
        margin: 0px;
        padding: 0px;
      }
      div.app--content {
        width: 90%;
        padding-top: ${({ theme }) => theme.dimensions.navHeight};
        ${maxQuery('lg')} {
          padding-top: ${({ theme }) => theme.dimensions.navHeightMobile};
        }
        max-width: ${({ theme }) => theme.dimensions.maxWidth};
        margin: 0 auto;
      }
    }


    /* utilities */
    .u--typo--title {
      font-size: 1.4rem;
      font-weight: 600;
    }

    .u--typo__title2 {
      font-size: 1.5rem;
      font-weight: 600;
    }
    .centered--txt {
      text-align: center;
    }

    
      .u--badge--green {
          background: #D3F8EF;
          color: #FF6C00;
      }
       .u--badge--blue {
          background: #CCE7FF;
          color: #2E9BFF;
      }
        .u--badge--yello {
          background: #FFFDCC;
          color: #999400;
      }
`
