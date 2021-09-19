import { Button } from '../../UI'
import { Edit, Delete } from '../../asset/convertedSvg'

export const columns = ({ handleEditClick, handleDeleteClick }) => [
  {
    title: 'Name',
    render: (row) => `${row.sname} ${row.fname}`,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'age',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Credit balance',
    dataIndex: 'creditBalance',
    key: 'creditBalance',
  },
  {
    title: 'KYC Level',
    dataIndex: 'kyc',
    key: 'kyc',
  },
  {
    title: 'Action',
    render: (row) => (
      <div className="action--container">
        <Button
          icon
          onClick={(e) => {
            e.stopPropagation()
            handleEditClick(row)
          }}
        >
          <Edit />
        </Button>
        <Button
          icon
          onClick={(e) => {
            e.stopPropagation()
            handleDeleteClick(row)
          }}
        >
          <Delete />
        </Button>
      </div>
    ),
  },
]
