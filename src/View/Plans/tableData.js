import { Button } from '../../UI'
import { Edit, Delete } from '../../asset/convertedSvg'

export const columns = ({ handleEditClick, handleDeleteClick }) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'No of Users',
    dataIndex: 'phone',
    key: 'phone',
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
