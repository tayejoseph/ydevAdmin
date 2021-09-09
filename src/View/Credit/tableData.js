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
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (item) => <span className="badge--success">{item}</span>,
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
  dueDate: '12th July, 2021',
  status: 'Paid',
}))
