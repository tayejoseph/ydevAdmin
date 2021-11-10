import React, { useEffect, useState } from 'react'
import produce from 'immer'
import { useSelector, useDispatch } from 'react-redux'
import { GrFormAdd } from 'react-icons/gr'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'
import { Button, InputGroup } from '../../UI'
import { getJobApplications } from '../../store/action'
import { formValidator } from '../../helpers'
import { AppRoute } from '../../constants'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const Jobs = () => {
  const { action } = useRouteMatch().params

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    jobType: '',
    roles: [''],
    experience: [''],
    skills: [''],
  })
  const { jobLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(jobLists, 'KKKK')

  const palletItems = [
    {
      title: 'Total Posted Job Applications',
      value: jobLists ? jobLists.length : 0,
    },
  ]
  useEffect(() => {
    dispatch(getJobApplications())
  }, [dispatch])

  const handleAltMultiple = (index, { value }, action, section) => {
    console.log({ index, value, action, section }, 'Testing')
    setFormData(
      produce((draft) => {
        if (action === 'delete') {
          draft[section] = draft[section].filter(
            (item, itemIndex) => itemIndex !== index,
          )
        } else if (action === 'add') {
          draft[section].push('')
        } else {
          draft[section][index] = value
          return draft
        }
      }),
    )
  }

  const handleAddMoreAddsOn = (className, section) => {
    if (formValidator(document.getElementsByClassName(className))) {
      handleAltMultiple(null, {}, 'add', section)
    }
  }

  return (
    <Container>
      <SectionHeader
        title="Jobs"
        links={[
          { title: 'Jobs', link: AppRoute.dashboard.jobs.initial },
          {
            title: 'Alt Job',
            link: `${AppRoute.dashboard.jobs.initial}/${action}`,
          },
        ]}
      />
      <form>
        <section className="top--section">
          <InputGroup label="Job Title" />
          <InputGroup label="Office Location" />
          <InputGroup
            label="Job Type"
            type="select"
            optionLists={
              <>
                <option>Remote</option>
                <option>Non Remote</option>
              </>
            }
          />
        </section>
        <section>
          <div className="jobRole--container">
            <h3>Job Roles & responsibilities</h3>
            <div className="role--form">
              {formData.roles &&
                formData.roles.map((item, index) => (
                  <div className={`input--row row--row`} key={`${item.value}`}>
                    <div>
                      <InputGroup
                        type="textarea"
                        inputClassName={`roles--${index} role-input`}
                        defaultValue={item}
                        onBlur={(e) =>
                          handleAltMultiple(index, e.target, null, 'roles')
                        }
                        placeholder="Faster delivery time"
                        style={{ marginBottom: 0 }}
                        data-label="Role and Responsibity"
                        required
                      />
                    </div>

                    {index === formData.roles.length - 1 ||
                    formData.roles.length === 1 ? (
                      <button
                        type="button"
                        className="more--btn"
                        onClick={() => {
                          handleAddMoreAddsOn(`role-input`, 'roles')
                        }}
                      >
                        <GrFormAdd />
                        Add another role
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="trash--btn"
                        onClick={() => {
                          handleAltMultiple(index, {}, 'delete', 'roles')
                        }}
                      >
                        <BsTrash />
                        Remove Role
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
        <section>
          <div className="jobRole--container">
            <h3>Prefered responsibilities</h3>
            <div className="role--form">
              {formData.experience &&
                formData.experience.map((item, index) => (
                  <div className={`input--row row--row`} key={`${item.value}`}>
                    <div>
                      <InputGroup
                        type="textarea"
                        inputClassName={`experience--${index} experience-input`}
                        defaultValue={item}
                        onBlur={(e) =>
                          handleAltMultiple(index, e.target, null, 'experience')
                        }
                        placeholder="Faster delivery time"
                        style={{ marginBottom: 0 }}
                        data-label="Role and Responsibity"
                        required
                      />
                    </div>

                    {index === formData.experience.length - 1 ||
                    formData.experience.length === 1 ? (
                      <button
                        type="button"
                        className="more--btn"
                        onClick={() => {
                          handleAddMoreAddsOn(`experience-input`, 'experience')
                        }}
                      >
                        <GrFormAdd />
                        Add another responsibilty
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="trash--btn"
                        onClick={() => {
                          handleAltMultiple(index, {}, 'delete', 'experience')
                        }}
                      >
                        <BsTrash />
                        Remove Responsibilty
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section>
          <div className="jobRole--container">
            <h3>Required Skills</h3>
            <div className="role--form">
              {formData.skills &&
                formData.skills.map((item, index) => (
                  <div className={`input--row row--row`} key={`${item.value}`}>
                    <div>
                      <InputGroup
                        type="textarea"
                        inputClassName={`skills--${index} skills-input`}
                        defaultValue={item}
                        onBlur={(e) =>
                          handleAltMultiple(index, e.target, null, 'skills')
                        }
                        placeholder="Faster delivery time"
                        style={{ marginBottom: 0 }}
                        data-label="Skill"
                        required
                      />
                    </div>

                    {index === formData.skills.length - 1 ||
                    formData.skills.length === 1 ? (
                      <button
                        type="button"
                        className="more--btn"
                        onClick={() => {
                          handleAddMoreAddsOn(`skills-input`, 'skills')
                        }}
                      >
                        <GrFormAdd />
                        Add another skill
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="trash--btn"
                        onClick={() => {
                          handleAltMultiple(index, {}, 'delete', 'skills')
                        }}
                      >
                        <BsTrash />
                        Remove Skill
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
        <Button type="submit">{action !== 'add' ? 'Save' : 'Submit'}</Button>
      </form>
    </Container>
  )
}

export default Jobs
