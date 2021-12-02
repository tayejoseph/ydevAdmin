import { Button } from '../../UI'
import { formatDate } from '../../helpers'
import { Delete } from '../../asset/convertedSvg'

export const columns = ({ handleDeleteAlumini, loading }) => [
  {
    title: 'Company Name',
    dataIndex: 'company_name',
    key: 'company_name',
  },
  {
    title: 'Company Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: 'Support Info',
    align: 'center',
    width: '20rem',
    render: ({ how_can_we_help }) => {
      return <div className="help--detail">{how_can_we_help}</div>
    },
  },
  {
    title: 'Date',
    dataIndex: 'uploadAt',
    align: 'center',
    render: (item) => formatDate(item),
  },
  {
    title: 'Actions',
    align: 'center',
    render: (row) => (
      <div className="action--container">
        <Button
          icon
          loading={loading.includes(row.id)}
          onClick={(e) => {
            e.stopPropagation()
            handleDeleteAlumini(row)
          }}
        >
          <Delete />
        </Button>
      </div>
    ),
  },
]
