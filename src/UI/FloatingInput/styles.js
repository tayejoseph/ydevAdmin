import styled from 'styled-components'
import { rem } from 'polished'

export default styled.div.attrs({
  className: 'input--group',
})`
  width: 100%;
  margin-bottom: 1.5em;
  input:not([type='checkbox']),
  select,
  textarea {
    height: ${rem('48px')};
    width: 100%;
    background: #ffffff;
    border-radius: 4px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    letter-spacing: 0.14px;
    padding: 0 1em;
    font-size: ${rem('14px')};
    font-weight: 500;
    color: #595f62;
    letter-spacing: 0.14px;
    &:active,
    &:focus {
      outline: none;
      border: 1.4px solid ${({ theme }) => theme.primary};
    }
    &:invalid:not([value='']) {
      color: #222222;
      border: 1.5px solid #ff5e5e;
    }
  }

  input::placeholder {
    color: #595f62;
    font-size: ${rem('14px')};
    letter-spacing: 0.14px;
    font-weight: 300;
  }
  label {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: ${rem('14px')};
    line-height: ${rem('20px')};
    letter-spacing: 0px;
    color: #03232e;
    margin-bottom: 0.5em;
  }
  textarea {
    height: ${rem('108px')};
    padding: 1em;
    resize: none;
  }
  p.error-msg {
    text-align: left;
    margin: 0px;
    margin-top: 0.5em;
    font-size: ${rem('13px')};
    letter-spacing: ${rem('0.13px')};
    color: #ff5e5e;
    opacity: 1;
  }
`
