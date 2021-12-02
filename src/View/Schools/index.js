import React, { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppRoute, schoolListMenu } from '../../constants'
import { InputGroup } from '../../UI'
import { getPrograms } from '../../store/action'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns } from './tableData'
import Container from './styles'

const Schools = () => {
  const [activeSchool, setActiveSchool] = useState('all-All')
  const { programLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    { title: 'Total Applications', value: programLists?.length },
  ]

  const activeSchoolData = programLists
    ? programLists.filter((item) => item.program === activeSchool.split('-')[0])
    : []

  useEffect(() => {
    dispatch(getPrograms())
  }, [dispatch])

  return (
    <Switch>
      <Route path={AppRoute.dashboard.schools.inital} exact>
        <Container>
          <SectionHeader
            title="ActiveSchool"
            links={[]}
            children={
              <InputGroup
                type="select"
                onChange={({ target: { value } }) => {
                  setActiveSchool(value)
                }}
                optionLists={
                  <>
                    {schoolListMenu.map((item) => (
                      <option
                        value={`${item.value}-${item.title}`}
                        key={item.title}
                      >
                        {item.title}
                      </option>
                    ))}
                  </>
                }
              />
            }
          />
          <div className="pallet--grid__container">
            {(activeSchool !== 'all-All'
              ? [
                  ...palletItems,
                  {
                    title: `Total ${activeSchool.split('-')[1]} Applicants `,
                    value: activeSchoolData.length,
                  },
                ]
              : palletItems
            ).map((item) => (
              <div className="pallet--item">
                <h1>{item.value}</h1>
                <div>
                  <p>{item.title}</p>
                  <div>
                    <UsersPallet />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <TableContainer
            {...{
              title: `${activeSchool.split('-')[1]} Applicants`,
              columns,
              loading: programLists === '',
              dataSource:
                activeSchool === 'all-All' ? programLists : activeSchoolData,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.repayment.initial}/${record.key}?tab=accounts`,
                    )
                  },
                }
              },
            }}
          />
        </Container>
      </Route>
    </Switch>
  )
}

export default Schools
