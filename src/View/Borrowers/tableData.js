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
    title: 'Loan Duration',
    dataIndex: 'loanDuration',
    key: 'loanDuration',
  },
  {
    title: 'Credit balance',
    dataIndex: 'creditBalance',
    key: 'creditBalance',
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
  creditType: 'Basic',
  loanDuration: '1 Month',
  repaymentMethod: 'One Time Repayment',
  creditBalance: '3,680',
}))
