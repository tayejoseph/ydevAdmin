import { v4 as uuid } from 'uuid'

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Contact Info',
    dataIndex: 'phone',
    key: 'phone',
  },
]
export const dataSource = [...Array(10).keys()].map((item, index) => ({
  key: uuid(),
  name: 'John Doe',
  email: 'JohnDoe@gmail.com',
  phone: '07012345675',
}))
