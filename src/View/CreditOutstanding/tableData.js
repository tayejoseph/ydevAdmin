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
    title: 'Paid',
    dataIndex: 'paid',
    key: 'paid',
  },
  {
    title: 'Past Due',
    dataIndex: 'pastDue',
    key: 'pastDue',
    align: 'center',
  },
  {
    title: 'Pending Due',
    dataIndex: 'pendingDue',
    key: 'pendingDue',
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
