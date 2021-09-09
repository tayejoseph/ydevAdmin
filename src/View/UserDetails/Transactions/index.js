import React from 'react'
import { Pagination, DatePicker } from 'antd'
import { RedDownArrow, GreenDownArrow } from '../../../asset/convertedSvg'
import Container from './styles'

const Transactions = () => {
  return (
    <Container>
      <div className="col--1">
        <header>
          <h2>Transactions</h2>
          <DatePicker onChange={console.log} />
        </header>
        <div className="content--item">
          <div className="transaction--lists">
            {[...Array(10).keys()].map((item) => (
              <div
                className={`transaction--item ${item === 0 ? 'active' : ''}`}
              >
                {item % 2 === 0 ? <RedDownArrow /> : <GreenDownArrow />}
                <div className="center--column">
                  <p>Debit Transactions</p>
                  <p>Shoprite Supermarket, Victoria Island</p>
                </div>
                <div className="right--column">
                  <p>- 40,000</p>
                  <p>17th June, 2020, 06:55 PM</p>
                </div>
              </div>
            ))}
          </div>
          <footer>
            <Pagination defaultCurrent={1} total={50} />
          </footer>
        </div>
      </div>

      <div className="col--2">
        <header>
          <h2>Details</h2>
        </header>
        <div className="content--item">
          <div className="transaction--details">
            <div>
              <RedDownArrow />
              <p>Debit Transaction</p>
            </div>
            <div>
              <h1>-NGN 40,000</h1>
              <p>17th June, 2020, 06:55 PM</p>
            </div>
          </div>
          <div className="detail--container">
            <div className="detail--item">
              <p>Transaction Ref</p>
              <p>12374359375ghd</p>
            </div>
            <div className="detail--item">
              <p>Agent Name</p>
              <p>Lekki Hospital</p>
            </div>
            <div className="detail--item">
              <p>Description</p>
              <p>Consultation</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Transactions
