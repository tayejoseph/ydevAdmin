import { v4 as uuid } from 'uuid'
import { Button } from '../../../UI'
import { Edit, Delete } from '../../../asset/convertedSvg'

export const columns = [
  {
    title: 'Payment Type',
    dataIndex: 'paymentType',
    key: 'paymentType',
  },
  {
    title: 'User Unique Number',
    dataIndex: 'uniqueNo',
    key: 'uniqueNo',
  },
  {
    title: 'Amount',
    dataIndex: 'amt',
    key: 'amt',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
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
  paymentType: 'Airtime & Data',
  uniqueNo: '1213554365685858',
  amt: 'NGN 5000',
  date: '12th July, 2020',
}))
