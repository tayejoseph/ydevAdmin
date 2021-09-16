import mixins from './mixins'

const dimensions = {
  navHeight: '4rem',
  dashTopPadding: '3rem',
  navHeightMobile: '8rem',
  maxWidth: '1300px',
  adminSideNavWidth: '16rem',
  adminTopNavHeight: '4.5rem',
  footerHeight: '3.5rem',
}

const colors = {
  darkBlue: '#053161',
}

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const theme = () => ({
  primary: '#1565E8',
  bgColor: '#F4F8FE',
  tertiary: 'pink',
  colors,
  mixins,
  dimensions,
  fontFamily: 'Livvic',
  secondary: '#BA390C',
})

export default theme
