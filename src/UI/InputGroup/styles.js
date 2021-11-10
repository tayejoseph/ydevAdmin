import styled from 'styled-components'
import { rem, rgba, lighten } from 'polished'

export default styled.div.attrs({
  className: 'input--group',
})`
  width: 100%;
  margin-bottom: 2em;

  input:not([type='checkbox']),
  select,
  textarea {
    height: ${rem('50px')};
    width: 100%;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    letter-spacing: 0.14px;
    padding: 0 1em;
    font-size: ${rem('14px')};
    font-weight: 400;
    color: #595f62;
    letter-spacing: 0.14px;
    &:active,
    &:focus {
      outline: none;
      border: 1.4px solid ${({ theme }) => theme.tertiary};
    }
    &:invalid:not([value='']) {
      color: #222222;
      /* border: 1.5px solid #ff5e5e; */
      box-shadow: none;
    }
  }
  div.password--container {
    position: relative;
    button {
      position: absolute;
      right: 1em;
      top: 50%;
      cursor: pointer;
      font-size: 0.9rem;
      transform: translateY(-50%);
      background: transparent;
      border: none;
      color: #202842;
      &:hover,
      &:focus {
        color: ${lighten(0.1, '#202842')};
      }
    }
  }

  textarea::placeholder,
  input::placeholder {
    color: #969cb3;
    font-size: ${rem('14px')};
    letter-spacing: 0.14px;
    font-weight: 300;
    color: #a3a8be;
  }
  select {
    font-weight: 400;
    color: #4d4476;
    &:invalid:not([value='']) {
      color: #222222;
      /* border: 1.5px solid #ff5e5e; */
    }
  }
  label {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: ${rem('16px')};
    line-height: ${rem('20px')};
    letter-spacing: 0px;
    color: #03232e;
    margin-bottom: 0.5em;
    grid-gap: 0.5em;
  }
  textarea {
    height: ${rem('108px')};
    padding: 1em;
    resize: none;
  }
  div.uploader--container {
    background: #eef0f9;
    border: 1px dashed #4d4476;
    box-sizing: border-box;
    height: 9rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    label.upload--instruction {
      width: 80%;
      max-width: 35rem;
      text-align: center;
      color: #4d4476;
      white-space: pre-wrap;
      font-weight: 300;
      font-size: 0.85rem;
      strong {
        font-weight: 500;
      }
    }
    input {
      visibility: hidden;
      position: absolute;
    }
  }
  div.imgPreview--container {
    display: flex;
    margin-top: 1.5em;
    align-items: center;
    grid-gap: 1.5em;
    flex-wrap: wrap;
    div.img--item {
      height: 4rem;
      width: 4rem;
      position: relative;
      cursor: pointer;
      ${({ theme }) => theme.mixins.centeredBg}
      background-color: #ffffff;
      outline: 1px solid ${({ theme }) => theme.primary};
      border: 1px solid #eef0f9;
      box-sizing: border-box;
      box-shadow: 0px 4px 10px 10px rgba(230, 234, 248, 0.08);
      border-radius: 4px;
      button {
        color: ${({ theme }) => theme.colors.danger};
        position: absolute;
        top: 0px;
        right: 0px;
        border: 1px solid ${({ theme }) => rgba(theme.colors.danger, 0.1)};
        font-size: 1.3rem;
        cursor: pointer;
        transform: translate(50%, -50%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0px;
        padding: 0px;
        outline: none;
      }
    }
    div.pdf--container {
      cursor: pointer;
      height: 4rem;
      width: 4rem;
      position: relative;
      cursor: pointer;
      ${({ theme }) => theme.mixins.centeredBg}
      background-color: #ffffff;
      outline: 1px solid ${({ theme }) => theme.primary};
      border: 1px solid #eef0f9;
      box-sizing: border-box;
      box-shadow: 0px 4px 10px 10px rgba(230, 234, 248, 0.08);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg.pdf--logo {
        font-size: 2.5rem;
        height: 4rem;
        color: #f40f02;
      }
      button {
        color: ${({ theme }) => theme.colors.danger};
        position: absolute;
        top: 0px;
        right: 0px;
        border: 1px solid ${({ theme }) => rgba(theme.colors.danger, 0.1)};
        font-size: 1.3rem;
        cursor: pointer;
        transform: translate(50%, -50%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        padding: 0px;
        outline: none;
      }
    }
  }
  div.inputWithStartLabel {
    position: relative;
    p.start--Input__txt {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding-left: 1em;
      font-size: 0.8rem;
      color: #a3a8be;
    }
    input {
      padding-left: 5em;
    }
  }
  div.file--container {
    margin: 0px;
    padding: 0px;
    p.start--Input__txt {
      font-size: 0.9rem !important;
      color: #a3a8be;
    }
  }
  div.social--container {
    position: relative;
    div.menu--container {
      position: absolute;
      top: 50%;
      z-index: 1;
      left: 0.5em;
      transform: translateY(-50%);
      border: none;
      background: transparent;
      &.active--social__menu {
        z-index: 999;
      }

      button {
        &.active--social {
          position: absolute;
          top: 50%;
          left: 0.5em;
          transform: translateY(-50%);
          border: none;
          cursor: pointer;
          display: flex;
          z-index: -1;
          background: transparent;
          .icon {
            font-size: 1.3rem;
          }
          svg {
            font-size: 1.2rem;
            * {
              stroke: #a3a8be;
            }
          }
        }
      }
      div.menu--lists {
        width: 10rem;
        position: absolute;
        background: #fff;
        top: 1rem;
        z-index: 999;
        padding: 0.2em 0px;
        border-radius: 4px;
        border: 1px solid #e1e4f3;
        box-shadow: 2px 4px 20px rgba(52, 87, 220, 0.05);
        button {
          display: flex;
          align-items: center;
          border: none;
          width: 100%;
          cursor: pointer;
          grid-gap: 1em;
          padding: 0.5em 1em;
          font-size: 0.9rem;
          color: #4d4476;
          background: transparent;
          svg {
            font-size: 1.2rem;
            * {
              stroke: #a3a8be;
            }
          }
        }
      }
    }
    button.delete--btn {
      position: absolute;
      top: 50%;
      right: 0.5em;
      transform: translateY(-50%);
      border: none;
      cursor: pointer;
      display: flex;
      background: transparent;
      .icon {
        font-size: 1.3rem;
      }
      svg {
        font-size: 1.2rem;
        * {
          stroke: ${({ theme }) => theme.colors.danger};
        }
      }
    }
    input {
      padding-left: 4.5em;
      z-index: 1;
      &::placeholder {
        color: #a3a8be;
      }
    }
  }
  p.after--label__txt {
    font-size: 0.9rem;
    margin-bottom: 1em;
    color: #4d4476;
    font-weight: 300;
  }
  p.error-msg {
    text-align: left !important;
    margin: 0px !important;
    margin-top: 0.5em !important;
    font-size: ${rem('13px')} !important;
    letter-spacing: ${rem('0.13px')} !important;
    color: #ff5e5e !important;
    opacity: 1 !important;
  }
  p.helper--txt {
    color: #4d4476;
    opacity: 0.6;
    margin-top: 0.5em;
    font-size: 0.85rem !important;
  }
`
