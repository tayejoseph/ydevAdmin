import React, { useRef } from 'react'
import Container from './styles'

const InputGroup = ({
  children,
  onChange,
  label,
  type,
  errorClass,
  className = '',
  ...props
}) => {
  const errorRef = useRef(null)
  return (
    <Container className={`input--group ${className}`}>
      {children ? (
        children
      ) : (
        <>
          {label && <label>{label}</label>}
          {type === 'textarea' ? (
            <textarea
              {...props}
              data-error={errorClass ? errorClass : `${props.name}--error`}
              onChange={(e) => {
                errorRef.current.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
            />
          ) : (
            <input
              {...props}
              type={type ? type : 'text'}
              data-error={errorClass ? errorClass : `${props.name}--error`}
              onChange={(e) => {
                errorRef.current.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
            />
          )}
        </>
      )}
      <p
        className={`error-msg ${
          errorClass ? errorClass : `${props.name}--error`
        }`}
        ref={errorRef}
      />
    </Container>
  )
}

export default InputGroup

// import React, { useRef } from 'react'
// import Container from './styles'

// const InputGroup = ({ children, onChange, label, type, ...props }) => {
//   const errorRef = useRef(null)
//   return (
//     <Container className="input--group">
//       {children ? (
//         children
//       ) : (
//         <>
//           {label && <label>{label}</label>}
//           <input
//             {...props}
//             type={type ? type : 'text'}
//             onChange={(e) => {
//               errorRef.current.innerHTML = ''
//               if (typeof onChange === 'function') onChange(e)
//             }}
//           />
//         </>
//       )}
//       <p className="error-msg" ref={errorRef} />
//     </Container>
//   )
// }

// export default InputGroup
