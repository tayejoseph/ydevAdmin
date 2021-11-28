import { Button } from '../../UI'
import { formatDate } from '../../helpers'
import { Delete } from '../../asset/convertedSvg'

export const columns = ({ handleDeleteMentor, loading }) => [
  {
    title: 'Full Name',
    dataIndex: 'full_name',
    key: 'full_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Company Name',
    dataIndex: 'company_name',
    key: 'company_name',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    key: 'phone_number',
    align: 'center',
  },
  {
    title: 'How we can help',
    dataIndex: 'how_can_we_help',
    key: 'how_can_we_help',
    align: 'center',
    render: (how_can_we_help) => {
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
            handleDeleteMentor(row)
          }}
        >
          <Delete />
        </Button>
      </div>
    ),
  },
]

export const dataSource = [
  {
    full_name: 'string',
    email: 'user@example.com',
    company_name: 'string',
    company_url: 'string',
    phone_number: 'string',
    how_can_we_help: 'string',
    id: 0,
    uploadAt: '2021-11-06T12:33:01.948Z',
  },
]
