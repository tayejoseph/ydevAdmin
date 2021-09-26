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
    schools: `${initialDashRoute}/schools`,
    events: `${initialDashRoute}/events`,
    payments: `${initialDashRoute}/payments`,


    users: {
      initial: `${initialDashRoute}/users`,
      view: `${initialDashRoute}/users`,
      groups: `${initialDashRoute}/users/groups`,
      email: `${initialDashRoute}/users/email`,
      sms: `${initialDashRoute}/users/sms`,
      details: `${initialDashRoute}/users/details`,
      params: {
        userId: 'userId',
      },
    },
    plans: {
      initial: `${initialDashRoute}/plans`,
      details: `${initialDashRoute}/plans/details`,
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
      bulk: `${initialDashRoute}/repayment/bulk`,
      params: {
        userId: 'userId',
      },
    },
    investors: {
      initial: `${initialDashRoute}/investors`,
      email: `${initialDashRoute}/investors/email`,
      sms: `${initialDashRoute}/investors/sms`,
      outstanding: `${initialDashRoute}/investors/outstanding`,
      creditCal: `${initialDashRoute}/investors/creditCalculator`,
      investorDetails: `${initialDashRoute}/investor/details`,
      params: {
        userId: 'userId',
      },
    },
    reports: {
      initial: `${initialDashRoute}/reports`,
      borrowers: `${initialDashRoute}/reports/borrowers`,
      loan: `${initialDashRoute}/reports/loan`,
      collection: `${initialDashRoute}/reports/collection`,
      settlement: `${initialDashRoute}/reports/settlement`,
      params: {
        userId: 'userId',
      },
    },
    settings: {
      initial: `${initialDashRoute}/settings`,
    },
  },
}

export default AppRoute
