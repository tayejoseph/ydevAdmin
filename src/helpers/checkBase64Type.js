const checkBase64Type = (base64String) => {
  if (base64String) {
    const base64strings = base64String.split(',')
    let extension = ''

    switch (base64strings[0]) {
      case 'data:image/jpeg;base64':
        extension = 'image'
        break
      case 'data:image/png;base64':
        extension = 'image'
        break
      case 'data:application/pdf;base64':
        extension = 'pdf'
        break
      default:
        extension = 'jpg'
        break
    }
    return extension
  }
}

export default checkBase64Type
