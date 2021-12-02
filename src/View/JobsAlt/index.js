import React, { useEffect, useState } from 'react'
import produce from 'immer'
import { useDispatch } from 'react-redux'
import { GrFormAdd } from 'react-icons/gr'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'
import { Button, InputGroup } from '../../UI'
import { getJobApplications, createJobApplications } from '../../store/action'
import { formValidator } from '../../helpers'
import { AppRoute } from '../../constants'
import { SectionHeader } from '../../components'
import Container from './styles'

const Jobs = () => {
  const { action } = useRouteMatch().params
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    job_type: '',
    roles: [{ name: '' }],
    responbilities: [{ name: '' }],
    skills: [{ name: '' }],
  })
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getJobApplications())
  }, [dispatch])

  const handleAltMultiple = (index, { value }, action, section) => {
    setFormData(
      produce((draft) => {
        if (action === 'delete') {
          draft[section] = draft[section].filter(
            (item, itemIndex) => itemIndex !== index,
          )
        } else if (action === 'add') {
          draft[section].push({ name: '' })
        } else {
          draft[section][index].name = value
          return draft
        }
      }),
    )
  }

  const handleInput = ({ target: { name, value } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleAddMoreAddsOn = (className, section) => {
    if (formValidator(document.getElementsByClassName(className))) {
      handleAltMultiple(null, {}, 'add', section)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator(document.forms['job-form'].getElementsByTagName('input'))
    ) {
      setLoading(true)
      try {
        const response = await dispatch(createJobApplications(formData))
        console.log(response, 'response')
        if (response && response.success) {
          history.goBack()
        }
      } finally {
        setLoading(false)
      }
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
      <form name="job-form" onSubmit={handleSubmit} noValidate>
        <section className="top--section">
          <InputGroup
            label="Job Title"
            name="title"
            value={formData.title}
            onChange={handleInput}
            data-label="Job title"
            required
          />
          <InputGroup
            label="Office Location"
            name="location"
            value={formData.location}
            onChange={handleInput}
            data-label="Office location"
          />
          <InputGroup
            label="Job Type"
            type="select"
            name="job_type"
            value={formData.job_type}
            onChange={handleInput}
            required
            data-label="Job Type"
            optionLists={
              <>
                <option value="">Select Job Type ...</option>
                <option value="Remote">Remote</option>
                <option value="Non remote">Non Remote</option>
              </>
            }
          />
        </section>
        <section>
          <div className="jobRole--container">
            <h3>Job Roles & responbilities</h3>
            <div className="role--form">
              {formData.roles &&
                formData.roles.map((item, index) => (
                  <div className={`input--row row--row`} key={`${item.value}`}>
                    <div>
                      <InputGroup
                        type="textarea"
                        inputClassName={`roles--${index} role-input`}
                        defaultValue={item.name}
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
            <h3>Prefered responbilities</h3>
            <div className="role--form">
              {formData.responbilities &&
                formData.responbilities.map((item, index) => (
                  <div className={`input--row row--row`} key={`${item.value}`}>
                    <div>
                      <InputGroup
                        type="textarea"
                        inputClassName={`responbilities--${index} responbilities-input`}
                        defaultValue={item.name}
                        onBlur={(e) =>
                          handleAltMultiple(
                            index,
                            e.target,
                            null,
                            'responbilities',
                          )
                        }
                        placeholder="Faster delivery time"
                        style={{ marginBottom: 0 }}
                        data-label="Role and Responsibity"
                        required
                      />
                    </div>

                    {index === formData.responbilities.length - 1 ||
                    formData.responbilities.length === 1 ? (
                      <button
                        type="button"
                        className="more--btn"
                        onClick={() => {
                          handleAddMoreAddsOn(
                            `responbilities-input`,
                            'responbilities',
                          )
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
                          handleAltMultiple(
                            index,
                            {},
                            'delete',
                            'responbilities',
                          )
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
                        defaultValue={item.name}
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
        <Button type="submit" loading={loading} spinnerWithTxt>
          {action !== 'add' ? 'Save' : 'Submit'}
        </Button>
      </form>
    </Container>
  )
}

export default Jobs
