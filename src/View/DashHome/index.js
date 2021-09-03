import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AppRoute } from '../../constants'
import { SectionHeader, PalletItem } from '../../components'
import Container from './styles'

const DashHome = () => {
  return (
    <Container>
      <header className="page--header">
        <SectionHeader
          title="Dashboard"
          links={[{ title: 'Dashboard', link: AppRoute.dashboard.initial }]}
        />
        <div className="grid--container">
          <div className="grid--item">
            <div>
              <p>TOTAL BORROWERS</p>
              <HiOutlineMenuAlt3 />
            </div>
            <h1>5.5k</h1>
            <div className="last--content"></div>
          </div>
          <div className="grid--item">
            <div>
              <p>TOTAL USERS</p>
            </div>
            <h1>5.5k</h1>
            <div className="last--content"></div>
          </div>
          <div className="grid--item">
            <div>
              <p>TOTAL CREDIT DISBURSED</p>
            </div>
            <h1>NGN 80,000</h1>
            <div className="last--content"></div>
          </div>
        </div>
      </header>
      <div className="page--content">
        <PalletItem title="Total Principal Outstanding Open Loans - Monthly"></PalletItem>
        <PalletItem title="Total Interest Outstanding Open Loans - Monthly"></PalletItem>
        <PalletItem title="Total Fees Outstanding Open Loans - Monthly"></PalletItem>
        <PalletItem title="Total Penalty Outstanding Open Loans - Monthly"></PalletItem>
        <PalletItem title="Total Fees Outstanding Open Loans - Monthly"></PalletItem>
        <PalletItem title="Total Penalty Outstanding Open Loans - Monthly"></PalletItem>
        <PalletItem title="Principal - Due vs Collections - Monthly"></PalletItem>
        <PalletItem title="Interest - Due vs Collections - Monthly"></PalletItem>
        <PalletItem
          className="full--span"
          title="Number of Open Loans(Cumulative) - Monthly"
        ></PalletItem>
        <PalletItem title="Rate of Return % (All Time)"></PalletItem>
        <PalletItem title="Active Male / Female Borrowers % (All Time)"></PalletItem>
        <PalletItem
          className="full--span"
          title="Loans Released - Monthly"
        ></PalletItem>
        <PalletItem
          className="full--span"
          title="Loan Collections vs Due Loans - Monthly"
        ></PalletItem>
        <PalletItem title="Fees - Due vs Collections - Monthly"></PalletItem>
        <PalletItem title="Penalty - Due vs Collections - Monthly"></PalletItem>
      </div>
    </Container>
  )
}

export default DashHome
