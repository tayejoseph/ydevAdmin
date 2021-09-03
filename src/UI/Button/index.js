import React from 'react'
import Container from './style'
import Spinner from '../Spinner'

const Button = ({
  disabled = false,
  loading = false,
  primary,
  secondary,
  badge,
  outlined,
  tertiary,
  full,
  style,
  small,
  type = 'button',
  className,
  rounded,
  plain,
  icon,
  iconRight,
  iconLeft,
  bordered,
  hasShadow,
  onClick,
  children,
  ...rest
}) => {
  const isPrimary = !secondary && !tertiary && !plain && !outlined
  return (
    <Container
      className={`btn u--typo__btn ${className ? className : ''}`}
      icon={icon ? icon : undefined}
      iconRight={iconRight ? iconRight : undefined}
      iconLeft={iconLeft ? iconLeft : undefined}
      disabled={disabled ? disabled : loading ? true : false}
      primary={primary || isPrimary ? true : undefined}
      secondary={secondary ? secondary : undefined}
      outlined={outlined ? outlined : undefined}
      tertiary={tertiary ? tertiary : undefined}
      plain={plain ? plain : undefined}
      rounded={rounded ? rounded : undefined}
      full={full ? full : undefined}
      onClick={onClick}
      type={type}
      style={style}
      {...rest}
    >
      {badge && <span className="badge--container">{badge}</span>}
      {loading ? <Spinner /> : children}
    </Container>
  )
}
export default Button
