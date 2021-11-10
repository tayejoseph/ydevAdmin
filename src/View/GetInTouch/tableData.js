import { Button } from '../../UI'
import { formatDate } from '../../helpers'
import { Delete } from '../../asset/convertedSvg'

export const columns = ({ handleDeleteMentor, loading }) => [
  {
    title: 'Full Name',
    render: (row) => `${row.first_name} ${row.last_name}`,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    key: 'phone_number',
    align: 'center',
  },
  {
    title: 'Message',
    align: 'center',
    render: ({ message }) => {
      return <div className="help--detail">{message}</div>
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
    first_name: 'string',
    last_name: 'string',
    email: 'user@example.com',
    subject: 'string',
    company_url: 'string',
    phone_number: 'string',
    message: 'string',
    id: 0,
    uploadAt: '2021-11-06T12:33:01.948Z',
  },
]
