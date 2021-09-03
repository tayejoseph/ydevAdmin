import Styled from 'styled-components'
import { lighten } from 'polished'
import { minQuery } from '../../../helpers'

export default Styled.div`
  div.switchAction--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5em;
    p {
      font-size: 1rem;
    }
  }
  div.item--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: 0px;
      color: #BA390C;
      margin-bottom: 0.5em;
      font-weight: 700;
      &:hover, &:active {
        color: #BA390C!important;
      }
    }
  }
  div.grid--container {
    ${minQuery('lg')} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5em;
    }
  }
  button.addChild--btn {
    color: ${({ theme }) => theme.primary};
    margin: 1.5em 0px;
    margin-top: 0px;
    &:hover, &:focus {
      outline: none;
      color: ${({ theme }) => lighten(0.1, theme.primary)}!important;
      text-decoration: underline;
    }
  }
  p.terms--txt {
    text-align: center;
    margin-top: 1em;
    font-size: 0.9rem;
    line-height: 100%;
    a {
      &:focus, &:hover {
        outline: none;
        text-decoration: underline;
      }
    }
  }
  `
