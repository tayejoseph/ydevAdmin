import { v4 as uuid } from 'uuid'
import { Button } from '../../UI'
import { Edit, Delete } from '../../asset/convertedSvg'

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
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Amount Repayed',
    dataIndex: 'amtRepayed',
    key: 'amtRepayed',
  },
  {
    title: 'Repayment Method',
    dataIndex: 'repaymentMethod',
    key: 'repaymentMethod',
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
  name: 'John Doe',
  email: 'JohnDoe@gmail.com',
  phone: '07012345675',
  amtRepayed: '100,000',
  repaymentMethod: 'Debit Card',
}))
