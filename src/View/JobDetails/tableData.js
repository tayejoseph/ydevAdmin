import { FiEye } from 'react-icons/fi'
import { Button } from '../../UI'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineGlobal } from 'react-icons/ai'

export const columns = ({ handleDeleteJob, loading }) => [
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
    title: 'Links',
    align: 'center',
    render: (row) => (
      <div className="links--container">
        {row.linkedlin_url && (
          <a href={row.linkedlin_url} target="__blank">
            <AiOutlineLinkedin />
          </a>
        )}
        {row.profile_url && (
          <a href={row.profile_url} target="__blank">
            <AiOutlineGlobal />
          </a>
        )}
      </div>
    ),
  },
  {
    title: 'Actions',
    align: 'center',
    render: (row) => (
      <div className="action--container">
        <Button
          icon
          loading={loading.includes(row.id)}
          onClick={() => {
            handleDeleteJob(row)
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
    full_name: 'Taye Joseph',
    email: 'tayejoseph6@gmail.com',
    linkedlin_url: 'https://www.linkedin.com/in/taye-joseph/',
    profile_url: 'https://tayejoseph.dev/',
  },
  {
    key: 1,
    id: 1,
    full_name: 'Taye Joseph',
    email: 'tayejoseph6@gmail.com',
    linkedlin_url: 'https://www.linkedin.com/in/taye-joseph/',
    profile_url: 'https://tayejoseph.dev/',
  },
]
