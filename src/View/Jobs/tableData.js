import { FiEye } from 'react-icons/fi'
import { Button } from '../../UI'
import { Edit, Delete } from '../../asset/convertedSvg'

export const columns = ({ handleViewDetails, handleAltJob }) => [
  {
    title: 'Job Title',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Job Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Job Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (status) => <button>{status}</button>,
  },
  {
    title: 'Total Applicants',
    dataIndex: 'totalApplicants',
    key: 'totalApplicants',
    align: 'center',
  },
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
