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
  dangerDark: '#FF5E5E',
  dangerLight: '#FFE9E9',
  danger: '#E93C3C',
  green: '#1AB759',
}

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

const theme = () => ({
  primary: '#051A26',
  secondary: '#3A8DBC',
  bgColor: '#F4F8FE',
  tertiary: 'pink',
  colors,
  mixins,
  dimensions,
  fontFamily: 'Livvic',
})

export default theme
