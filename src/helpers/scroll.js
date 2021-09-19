import { dashboardConstant } from '../constants'

export const scrollDashboardToTop = (id) => {
  const dom = document.getElementById(id || dashboardConstant.dashboardId)
  if (dom) {
    dom.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
}
