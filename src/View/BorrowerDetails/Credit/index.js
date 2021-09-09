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
import {
  SecondaryCreditCard,
  PrimaryCreditCard,
} from '../../../asset/convertedSvg'
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
              <p>Credit Balance</p>
              <p>5000</p>
            </div>
            <div className="item--row">
              <p>Loan Taken</p>
              <p>
                Premium <span className="u--color__green">(NGN 200,000)</span>
              </p>
            </div>{' '}
            <div className="item--row">
              <p>Repayment Type</p>
              <p>Instalmental Payment</p>
            </div>{' '}
            <div className="item--row">
              <p>No of Repayment period</p>
              <p>4</p>
            </div>{' '}
            <div className="item--row">
              <p>Next repayment date</p>
              <p>12th July, 2020</p>
            </div>
            <div className="item--row">
              <p>Last repayment date</p>
              <p>14th Aug, 2021</p>
            </div>
          </div>
        </div>

        <div className="col--2">
          <header>
            <h2>Card Details</h2>
          </header>
          <div className="content--item">
            <div className="card--col__1">
              <div className="card--item">
                <PrimaryCreditCard />
                <div className="card--details">
                  <p>03/22</p>
                  <p>***************34565</p>
                </div>
              </div>
              <div className="card--item">
                <SecondaryCreditCard />
                <div className="card--details">
                  <p>03/22</p>
                  <p>***************34565</p>
                </div>
              </div>
            </div>
            <div className="card--col__2">
              <div className="card--item status--row">
                <p>Status</p>
                <p className="u--status--active">Active</p>
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
