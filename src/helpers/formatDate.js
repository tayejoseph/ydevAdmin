import moment from 'moment'

const formDate = (date) => {
  if (date) {
    return moment(date).format('MMM Do YY')
  } else {
    return moment.format('MMM Do YY')
  }
}

export default formDate
