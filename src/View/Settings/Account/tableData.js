import { v4 as uuid } from 'uuid'
import { Button } from '../../../UI'
import { Edit, Delete } from '../../../asset/convertedSvg'

export const columns = [
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Bank Name',
    dataIndex: 'bankName',
    key: 'bankName',
  },
  {
    title: 'Account Number',
    dataIndex: 'accNo',
    key: 'accNo',
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
export const dataSource = [...Array(5).keys()].map((item, index) => ({
  key: uuid(),
  country: 'Nigeria',
  currency: 'Naira',
  bankName: 'Bank of NIgeria',
  accNo: '9322309239324',
}))
