import { Button } from '../../UI'
import { formatDate } from '../../helpers'
import { Delete } from '../../asset/convertedSvg'

export const columns = ({ handleDeleteAlumini, loading }) => [
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
    dataIndex: 'organization_name',
    key: 'organization_name',
  },
  {
    title: 'Support Info',
    dataIndex: 'support_info',
    align: 'center',
    width: '20rem',
    render: (support_info) => {
      return (
        <ul className="help--detail">
          {support_info
            ? JSON.parse(support_info).map((item) => <li>{item}</li>)
            : ''}
        </ul>
      )
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

export const dataSource = [
  {
    full_name: 'string',
    email: 'user@example.com',
    organization_name: 'string',
    support_info: 'string',
    id: 0,
    uploadAt: '2021-11-06T12:33:01.948Z',
  },
]
