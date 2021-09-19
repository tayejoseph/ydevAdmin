import { css } from 'styled-components'

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  maxWidth: css`
    width: 90%;
    max-width: ${({ theme }) => theme.dimensions.maxWidth};
    margin: 0 auto;
  `,
  hideScollbarHorizontal: css`
    & {
      overflow-x: auto;
      -ms-overflow-style: none; /* IE 11 */
      scrollbar-width: none; /* Firefox 64 */
    }
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  scrollbar: css`
    & {
      overflow-y: overlay;
      scrollbar-width: thin;
      scrollbar-color: #eaeaea;
    }
    &::-webkit-scrollbar {
      width: 8px;
      height: 80%;
      border-radius: 40px;
    }
    &::-webkit-scrollbar-track {
      background: #eaeaea;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #c4c4c4;
      border-radius: 40px;
      background: transparent;
    }
    &:hover {
      &::-webkit-scrollbar-track {
        background: #eaeaea;
      }
      &::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        border-radius: 40px;
      }
    }
  `,
}

export default mixins
