const initialDashRoute = '/admin/dashboard'
const authInitial = '/auth'

const AppRoute = {
  auth: {
    initial: authInitial,
    signIn: `${authInitial}/signIn`,
    signUp: `${authInitial}/signUp`,
    forgotPassword: `${authInitial}/forgotPassword`,
  },
  dashboard: {
    initial: initialDashRoute,
    enterprise: `${initialDashRoute}/enterprise`,
    payments: `${initialDashRoute}/payments`,
    jobs: {
      initial: `${initialDashRoute}/jobs`,
      details: `${initialDashRoute}/jobs/jobDetails`,
    },
    events: {
      initial: `${initialDashRoute}/events`,
      details: `${initialDashRoute}/events/eventsDetails`,
    },
    mentors: {
      initial: `${initialDashRoute}/mentors`,
    },
    consultation: {
      initial: `${initialDashRoute}/consultation`,
    },
    higherEd: {
      initial: `${initialDashRoute}/higherEd`,
    },
    schools: {
      initial: `${initialDashRoute}/schools`,
    },
    instructor: {
      initial: `${initialDashRoute}/instructor`,
    },
    cooperateTraining: {
      initial: `${initialDashRoute}/cooperateTraining`,
    },
    applications: {
      initial: `${initialDashRoute}/applications`,
    },
    alumini: {
      initial: `${initialDashRoute}/alumini`,
    },
    getInTouch: {
      initial: `${initialDashRoute}/getInTouch`,
    },
  },
}

export default AppRoute
