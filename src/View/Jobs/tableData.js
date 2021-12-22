import { FiEye } from 'react-icons/fi'
import { Button, Spinner } from '../../UI'
import { Edit, Delete } from '../../asset/convertedSvg'

export const columns = ({
  loading,
  handleViewDetails,
  handleAltJob,
  handleDelete,
  handleAltPublish,
}) => [
  {
    title: 'Job Title',
    dataIndex: 'title',
    key: 'title',
  },
  // {
  //   title: 'Job Type',
  //   dataIndex: 'job_type',
  //   key: 'job_type',
  // },
  // {
  //   title: 'Job Location',
  //   dataIndex: 'location',
  //   key: 'location',
  //   align: 'center',
  // },
  // {
  //   title: 'Publish',
  //   align: 'center',
  //   render: (row) =>
  //     loading.includes(`pub-${row.id}`) ? (
  //       <Spinner />
  //     ) : (
  //       <button onClick={() => handleAltPublish(row)}>
  //         {row.published ? 'Unpublish' : 'Publish'}
  //       </button>
  //     ),
  // },
  {
    title: 'Actions',
    align: 'center',
    render: (row) => (
      <div className="action--container">
        <Button
          icon
          onClick={() => {
            handleAltJob(row)
          }}
        >
          <Edit />
        </Button>
        <Button
          icon
          onClick={(e) => {
            e.stopPropagation()
            handleViewDetails(row)
          }}
        >
          <FiEye />
        </Button>
        <Button
          icon
          loading={loading.includes(row.id)}
          onClick={(e) => {
            e.stopPropagation()
            handleDelete(row)
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
    key: 1,
    id: 1,
    name: 'Front End Developer',
    type: 'Remote',
    status: 'Published',
    totalApplicants: 20,
  },
  {
    key: 1,
    id: 2,
    name: 'Front End Developer',
    type: 'Remote',
    status: 'Unpublished',
    totalApplicants: 20,
  },
]
