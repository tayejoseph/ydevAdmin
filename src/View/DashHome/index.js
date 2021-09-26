import React from 'react'
import { useTheme } from 'styled-components'
import moment from "moment"
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AppRoute } from '../../constants'
import {
  SectionHeader,
  PalletItem,
  LineGraph,
  DashPallet,
} from '../../components'
import Container from './styles'

const DashHome = () => {
  const theme = useTheme()
  return (
    <Container>
      <header className="page--header">
        <SectionHeader
          title="Dashboard"
          links={[
            {
              title: 'Dashboard',
              link: AppRoute.dashboard.initial,
            },
          ]}
        />
        <div className="grid--container">
          <DashPallet
            title={'TOTAL Response'}
            icon={<HiOutlineMenuAlt3 />}
            value={'5.5k'}
            bgColor={'#28C76F'}
          />
          <DashPallet
            title={'ALL EARNINGS'}
            bgColor={theme.primary}
            value={'NGN 80,000'}
          />
          <DashPallet
            title={'TOTAL FOLLOWUP'}
            bgColor={'#021F4F'}
            value={'5.5k'}
          />
        </div>
      </header>
      <div className="page--content">
        <PalletItem title="Recent Activities" className = "activities--container">
        <div className ="active--trail">
        {[...Array(10).keys()].map((item) => (
           <div className="recent--activity" key={item}>
              <p className="u--typo__caption--small">Sign Up</p>
              <div>
                <p
                  className="u--typo__caption--small"
                  style={{ whiteSpace: 'pre-line', textAlign: 'right' }}
                >
                  {moment(new Date())
                    .format('MMMM Do YYYY, h:mm:ss a')
                    .replace(',', '\n')}
                </p>
              </div>
            </div>
        ))}
        </div>
        </PalletItem>
        <PalletItem title="Total Interest Outstanding Open Loans - Monthly">
          <LineGraph />
        </PalletItem>
      </div>
    </Container>
  )
}

export default DashHome
