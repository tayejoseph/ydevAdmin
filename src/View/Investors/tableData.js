import { v4 as uuid } from 'uuid'
import { Button } from '../../UI'
import { Edit, Delete } from '../../asset/convertedSvg'

export const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
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
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Amount Invested',
    dataIndex: 'amtInvested',
    key: 'amtInvested',
  },
  {
    title: 'Action',
    render: () => (
      <div className="action--container">
        <Button icon>
          <Edit />
        </Button>
        <Button icon>
          <Delete />
        </Button>
      </div>
    ),
  },
]
export const dataSource = [...Array(10).keys()].map((item, index) => ({
  key: uuid(),
  id: index,
  name: 'John Doe',
  email: 'JohnDoe@gmail.com',
  phone: '07012345675',
  amtInvested: '100,000',
  repaymentMethod: 'Debit Card',
}))
