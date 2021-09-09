import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export default styled.button`
  &:disabled {
    cursor: no-drop;
  }
  cursor: pointer;
  outline: none;
  position: relative;
  span.badge--container {
    position: absolute;
    background: #e93c3c;
    border-radius: 50%;
    padding: 0.25em;
    font-size: 0.9rem;
    top: -0.1em;
    right: -0.1em;
  }
  ${(props) => css`
    padding: 0.8em 1.8em;
    font-size: 0.9rem;
    border-radius: 4px;
    font-weight: 500;
    user-select: none;
    outline: none;
    background: transparent;
    width: ${props.full ? '100%' : 'fit-content'};
    display: ${props.full ? 'block' : 'inline-block'};
    ${
      props.primary &&
      css`
        border: 2px solid ${props.theme.primary};
        background-color: ${({ theme }) => theme.primary};
        color: #fff;
        &:hover,
        &:focus {
          background: ${({ theme }) => lighten(0.1, theme.primary)};
          border-color: ${({ theme }) => lighten(0.1, theme.primary)};
          color: #fff;
          outline: none;
        }
        &:disabled {
          background: ${({ theme }) => theme.disabled}!important;
          border-color: ${({ theme }) => theme.disabled}!important;
          color: #fff !important;
        }
      `
    }
    ${
      props.outlined &&
      css`
        border: 1px solid ${props.theme.primary};
        background-color: transparent;
        color: ${props.theme.primary};
        font-weight: 400;
        &:hover,
        &:focus {
          background-color: ${props.theme.primary};
          color: #fff;
          outline: none;
        }
      `
    }
    ${
      props.secondary &&
      css`
        border: 1px solid ${({ theme }) => theme.tertiary} !important;
        border-color: #fff;
        box-shadow: none;
        background: #fff;
        box-shadow: none;
        color: ${props.theme.tertiary};
        &:hover,
        &:focus {
          background: #fff;
          border-color: ${({ theme }) =>
            lighten(0.1, theme.tertiary)}!important;
          color: ${({ theme }) => lighten(0.1, theme.tertiary)}!important;
          border: 1px solid ${({ theme }) => theme.tertiary} !important;
        }
        &:disabled {
          background: transparent !important;
          color: ${props.theme.disabled}!important;
        }
      `
    }
    ${
      props.tertiary &&
      css`
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
        color: ${({ theme }) => theme.primary};
        &:hover,
        &:focus {
          border-color: transparent !important;
          background-color: transparent !important;
          color: ${({ theme }) => theme.primary}!important;
        }
      `
    }
    ${
      props.plain &&
      css`
        background-color: transparent;
        border-color: transparent !important;
        color: ${({ theme }) => theme.tertiary};
        padding: 0px;
        box-shadow: none;
        &:hover,
        &:focus {
          color: ${({ theme }) => lighten(0.1, theme.tertiary)}!important;
          border-color: transparent !important;
          background-color: transparent !important;
        }
      `
    }
    ${
      props.rounded &&
      css`
        border-radius: 20px;
      `
    }
    ${
      props.icon &&
      css`
        padding: 0px;
        background: transparent;
        box-shadow: none;
        color: black;
        border: none;
        .icon {
          font-size: 1.2em;
          margin: 0px;
          padding: 0px;
        }
        &:hover,
        &:focus {
          background: transparent;
          border: none;
          outline: none;
          color: black;
        }
        &:disabled {
          background: transparent;
          border: none;
          color: #fff;
          outline: none;
        }
      `
    }
    &.icon--btn__hover {
        &:hover,
        &:focus {
          color: #fff;
          background-color: ${({ theme }) => lighten(0.1, theme.primary)};
        }
    }

       
    /* iconRight */
    ${
      props.iconRight &&
      css`
        display: flex;
        align-items: center;
        .icon {
          margin-right: 0.3em;
          font-size: 1.2em;
        }
      `
    }

  /* IconLeft */
    ${
      props.iconLeft &&
      css`
        display: flex;
        align-items: center;
        .icon {
          margin-left: 0.3em;
          font-size: 1.2em;
        }
      `
    }

     &.btn--money {
        padding: 0.2em 0.3em;
        background: #E2FFEC;
        .icon {
            color: #47C479;
        }
    }
    &.btn--edit {
        padding: 0.2em 0.3em;
        background: #E2EDFF;
        border: 1px solid #E2EDFF;
        .icon {
            color: #4187FF;
        }
    }
    &.btn--delete {
        padding: 0.2em 0.3em;
        background: #FFE9E9;
        color: #FF5E5E;
        border: 1px solid #FFE9E9;
        .icon {
            color: #FF5E5E;
        }
    }
    &.btn--copy {
        padding: 0.2em 0.3em;
        background: #F9F6FB;
        color: #855AAF;
        border: 1px solid #F9F6FB;
        .icon {
            color: #855AAF;
        }
    }
  /* notification */
  &.notification--badge {
    position: relative;
    &:after {
      content: "";
      top: -2px;
      right: 0%;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #FF5E5E;
      border: 1.6px solid #fff;

    }
  }
    `}
`
