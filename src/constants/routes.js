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
    users: {
      initial: `${initialDashRoute}/users`,
      view: `${initialDashRoute}/users`,
      groups: `${initialDashRoute}/users/groups`,
      email: `${initialDashRoute}/users/email`,
      sms: `${initialDashRoute}/users/sms`,
      new: `${initialDashRoute}/users/new`,
      params: {
        userId: 'userId',
      },
    },
    borrowers: {
      initial: `${initialDashRoute}/borrowers`,
      email: `${initialDashRoute}/borrowers/email`,
      sms: `${initialDashRoute}/borrowers/sms`,
      new: `${initialDashRoute}/borrowers/new`,
      params: {
        userId: 'userId',
      },
    },
    credit: {
      initial: `${initialDashRoute}/credit`,
      due: `${initialDashRoute}/credit/due`,
      missed: `${initialDashRoute}/credit/missedPayment`,
      outstanding: `${initialDashRoute}/credit/outstanding`,
      calculator: `${initialDashRoute}/credit/calculator`,
      params: {
        userId: 'userId',
      },
    },
    repayment: {
      initial: `${initialDashRoute}/repayment`,
      due: `${initialDashRoute}/credit/due`,
      missed: `${initialDashRoute}/credit/missedPayment`,
      outstanding: `${initialDashRoute}/credit/outstanding`,
      calculator: `${initialDashRoute}/credit/calculator`,
      params: {
        userId: 'userId',
      },
    },
    investors: `${initialDashRoute}/investors`,
    reports: `${initialDashRoute}/reports`,
    settings: `${initialDashRoute}/settings`,
  },
}

export default AppRoute
