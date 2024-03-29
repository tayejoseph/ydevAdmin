import { BsTrash } from 'react-icons/bs'
import moment from 'moment'
import { Button } from '../../UI'
import { Edit } from '../../asset/convertedSvg'

export const columns = ({ loading, handleViewDetails, handleDeleteEvent }) => [
  {
    title: 'Event Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Event Date',
    dataIndex: 'event_date',
    key: 'event_date',
    render: (event_date) =>
      moment(event_date).format('MMMM Do YYYY, h:mm:ss a'),
  },
  {
    title: 'Event Details',
    dataIndex: 'details',
    key: 'details',
  },
  {
    title: 'Actions',
    align: 'center',
    render: (row) => (
      <div className="action--container">
        <Button
          icon
          onClick={() => {
            handleViewDetails(row)
          }}
        >
          <Edit />
        </Button>
        <Button
          icon
          loading={loading.includes(row.id)}
          className="btn--trash"
          onClick={(e) => {
            e.stopPropagation()
            handleDeleteEvent(row)
          }}
        >
          <BsTrash />
        </Button>
      </div>
    ),
  },
]

export const dataSource = [
  {
    key: 1,
    id: 1,
    name: 'Dev ops summit',
    date: 'October 21',
    details: 'Devops summit, learn more about devops operations',
  },
  {
    key: 1,
    id: 1,
    name: 'Dev ops summit',
    date: 'October 21',
    details: 'Devops summit, learn more about devops operations',
  },
]
