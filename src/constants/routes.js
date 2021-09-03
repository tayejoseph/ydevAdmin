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
    users: `${initialDashRoute}/users`,
    borrowers: `${initialDashRoute}/borrowers`,
    loans: `${initialDashRoute}/loans`,
    repayments: `${initialDashRoute}/repayments`,
    investors: `${initialDashRoute}/investors`,
    reports: `${initialDashRoute}/reports`,
    settings: `${initialDashRoute}/settings`,
  },
}

export default AppRoute
