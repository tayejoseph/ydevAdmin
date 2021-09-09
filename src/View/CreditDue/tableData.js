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
    title: 'Credit Type',
    dataIndex: 'creditType',
    key: 'creditType',
  },
  {
    title: 'Amount',
    dataIndex: 'amt',
    key: 'amt',
  },
  {
    title: 'Interest',
    dataIndex: 'interest',
    key: 'interest',
  },
  {
    title: 'Paid',
    dataIndex: 'paid',
    key: 'paid',
  },
  {
    title: 'Pending Due Amount',
    dataIndex: 'pendingAmt',
    key: 'pendingAmt',
    align: 'center',
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
  creditType: 'Bumpa Credit',
  amt: '500,000',
  interest: '25,000',
  paid: '50,000',
  pendingAmt: '3,680',
}))
