import { v4 as uuid } from 'uuid'
import moment from 'moment'
import abbreviate from 'number-abbreviate'

export const columns = [
  {
    title: 'Program',
    dataIndex: 'program',
    key: 'program',
    render: (item) => (item ? item.replace('_', ' ') : ''),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (item) => abbreviate(item),
  },
  {
    title: 'Date',
    dataIndex: 'student',
    key: 'student',
    render: (item) => moment(item).format('MMM Do YY'),
  },
]
export const dataSource = [...Array(10).keys()].map((item, index) => ({
  key: uuid(),
  name: 'John Doe',
  location: 'Lekki',
  student: 'John Doe',
}))
