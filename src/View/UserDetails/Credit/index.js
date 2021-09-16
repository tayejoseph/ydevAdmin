import React from 'react'
import {
  repaymentColumn,
  repaymentDataSource,
  creditColumn,
  creditDataSource,
  defaultColumn,
  defaultDataSource,
} from './tableData'
import { TableContainer } from '../../../components'
import { StackedCreditCard } from '../../../asset/convertedSvg'
import Container from './styles'

const Credit = () => {
  return (
    <Container>
      <section className="first--section">
        <div className="col--1">
          <header>
            <h2>Credit Details</h2>
          </header>
          <div className="content--item">
            <div className="item--row">
              <p>Total Credit Applied For</p>
              <p>NGN 120,000</p>
            </div>
            <div className="item--row">
              <p>Total Repayment made</p>
              <p>NGN 120,000</p>
            </div>{' '}
            <div className="item--row">
              <p>Credit balance</p>
              <p>NGN 2,000</p>
            </div>{' '}
            <div className="item--row">
              <p>Collateral Balance</p>
              <p>NGN 20,000</p>
            </div>{' '}
            <div className="item--row">
              <p>Credit Rating</p>
              <p>4/5</p>
            </div>
          </div>
        </div>

        <div className="col--2">
          <header>
            <h2>Card Details</h2>
          </header>
          <div className="content--item">
            <div className="card--col__1">
              <StackedCreditCard />
              <div className="card--details">
                <p>03/22</p>
                <p>***************34565</p>
              </div>
            </div>
            <div className="card--col__2">
              <div className="card--item">
                <p>Status</p>
                <p>Active</p>
              </div>
              <div className="card--item">
                <p>Name</p>
                <p>John Doe</p>
              </div>
              <div className="card--item">
                <p>Type</p>
                <p>Mastercard</p>
              </div>
              <div className="card--item">
                <p>Currency</p>
                <p>Naira</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TableContainer
        {...{
          title: 'Repayment History',
          columns: repaymentColumn,
          dataSource: repaymentDataSource,
        }}
      />

      <TableContainer
        {...{
          title: 'Credit History',
          columns: creditColumn,
          dataSource: creditDataSource,
        }}
      />

      <TableContainer
        {...{
          title: 'Default History',
          columns: defaultColumn,
          dataSource: defaultDataSource,
        }}
      />
    </Container>
  )
}

export default Credit
