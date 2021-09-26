import { v4 as uuid } from 'uuid'

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Student',
    dataIndex: 'student',
    key: 'student',
  },
]
export const dataSource = [...Array(10).keys()].map((item, index) => ({
  key: uuid(),
  name: 'John Doe',
  location: 'Lekki',
  student: 'John Doe',
}))
