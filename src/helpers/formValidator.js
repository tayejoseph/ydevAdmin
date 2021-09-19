export const isEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  )
}

const formValidator = (inputs) => {
  let validated = true
  Array.from(inputs).map((input) => {
    const { type, value, required } = input
    const errorClass = input.getAttribute('data-error')
    const name = input.getAttribute('data-label')
      ? input.getAttribute('data-label')
      : input.name
    const errorItem = document.getElementsByClassName(errorClass)[0]
    if (required) {
      if (value) {
        errorItem.innerHTML = ''
      } else {
        validated = false
        errorItem.innerHTML = `${name} cannot be blank`
      }
    }

    if (type === 'email') {
      if (isEmail(value)) {
        errorItem.innerHTML = ''
      } else {
        validated = false
        errorItem.innerHTML = 'Invalid Email Address'
      }
    }

    if (type === 'password') {
      if (value) {
        errorItem.innerHTML = ''
      } else errorItem.innerHTML = `Password cannot be blank`
    }

    return input
  })
  return validated
}

export default formValidator

// export const isEmail = (email) => {
//   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email,
//   )
// }

// const formValidator = (inputs) => {
//   let validated = true
//   Array.from(inputs).map((input) => {
//     const { type, value, required } = input
//     const name = input.getAttribute('data-label')
//       ? input.getAttribute('data-label')
//       : input.name
//     if (required) {
//       if (value) {
//         input.parentElement.getElementsByClassName('error-msg')[0].innerHTML =
//           ''
//       } else {
//         validated = false
//         input.parentElement.getElementsByClassName(
//           'error-msg',
//         )[0].innerHTML = `${name} cannot be blank`
//       }
//     }

//     if (type === 'email') {
//       if (isEmail(value)) {
//         input.parentElement.getElementsByClassName('error-msg')[0].innerHTML =
//           ''
//       } else {
//         validated = false
//         input.parentElement.getElementsByClassName('error-msg')[0].innerHTML =
//           'Invalid Email Address'
//       }
//     }

//     if (type === 'password') {
//       if (value) {
//         input.parentElement.getElementsByClassName('error-msg')[0].innerHTML =
//           ''
//       } else
//         input.parentElement.getElementsByClassName(
//           'error-msg',
//         )[0].innerHTML = `Password cannot be blank`
//     }

//     return input
//   })
//   return validated
// }

// export default formValidator
