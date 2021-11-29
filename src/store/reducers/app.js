import TYPES from '../types'

const initState = {
  authenticated: false,
  userDetails: '',
  jobLists: '',
  eventLists: '',
  aluminiLists: '',
  programLists: '',
  mentorsLists: '',
  contactLists: '',
  hireEdLists: '',
  applications: '',
}

const UserReducer = (state = initState, action) => {
  const { type, data } = action

  switch (type) {
    case TYPES.clearState:
      return initState
    case TYPES.altPrograms:
      return {
        ...state,
        programLists: data,
      }
    case TYPES.alterApplication:
      return {
        ...state,
        applications: data,
      }
    case TYPES.alterHireEd:
      return {
        ...state,
        hireEdLists: data,
      }
    case TYPES.altJobApplication:
      return {
        ...state,
        jobLists: data,
      }
    case TYPES.altEvents:
      return {
        ...state,
        eventLists: data,
      }
    case TYPES.altMentors:
      return {
        ...state,
        mentorsLists: data,
      }
    case TYPES.altAlumini:
      return {
        ...state,
        aluminiLists: data,
      }
    case TYPES.altContacts:
      return {
        ...state,
        contactLists: data,
      }
    default:
      return state
  }
}

export default UserReducer
