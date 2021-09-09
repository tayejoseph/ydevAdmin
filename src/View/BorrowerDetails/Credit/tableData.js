import { v4 as uuid } from 'uuid'
import { Button } from '../../../UI'
import { Edit, Delete } from '../../../asset/convertedSvg'

export const repaymentColumn = [
  {
    title: 'Credit Amount',
    dataIndex: 'credAmount',
    key: 'credAmount',
  },
  {
    title: 'Medium',
    dataIndex: 'medium',
    key: 'medium',
  },
  {
    title: 'Date & Time',
    dataIndex: 'dateTime',
    key: 'dateTime',
  },
  {
    title: 'Loan Repaying for',
    dataIndex: 'loanRepay',
    key: 'loanRepay',
  },
  {
    title: 'Balance Before',
    dataIndex: 'balanceBefore',
    key: 'balanceBefore',
  },
  {
    title: 'Balance After',
    dataIndex: 'balanceAfter',
    key: 'balanceAfter',
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
export const repaymentDataSource = [...Array(10).keys()].map((item, index) => ({
  key: uuid(),
  credAmount: '50,000',
  medium: 'Debit Card',
  dateTime: '12th July 2021, 9:00am',
  loanRepay: 'Bumpa Credit',
  balanceBefore: `10,000`,
  balanceAfter: `10,000`,
}))

export const creditColumn = [
  {
    title: 'Credit Amount',
    dataIndex: 'creditAmt',
    key: 'creditAmt',
  },
  {
    title: 'Credit Type',
    dataIndex: 'creditType',
    key: 'creditType',
  },
  {
    title: 'Repayment Plan',
    dataIndex: 'repayment',
    key: 'repayment',
  },
  {
    title: 'Date & Time',
    dataIndex: 'dateTime',
    key: 'dateTime',
  },
  {
    title: 'Balance Before',
    dataIndex: 'balanceBefore',
    key: 'balanceBefore',
  },
  {
    title: 'Balance After',
    dataIndex: 'balanceAfter',
    key: 'balanceAfter',
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
export const creditDataSource = [...Array(10).keys()].map((item, index) => ({
  key: uuid(),
  creditAmt: '10,000',
  creditType: 'Bumpa Credit',
  repayment: 'One Time',
  dateTime: '12th July 2021, 9:00am',
  balanceBefore: `10,000`,
  balanceAfter: `10,000`,
}))

export const defaultColumn = [
  {
    title: 'Credit Amount',
    dataIndex: 'creditAmt',
    key: 'creditAmt',
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
  },
  {
    title: 'Credit Type',
    dataIndex: 'creditType',
    key: 'creditType',
  },
  {
    title: 'Days Past Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
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
export const defaultDataSource = [...Array(10).keys()].map((item, index) => ({
  key: uuid(),
  creditAmt: '10,000',
  creditType: 'Bumpa Credit',
  dueDate: '5 Days',
}))
