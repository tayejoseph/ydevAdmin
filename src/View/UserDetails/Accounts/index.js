import React from 'react'
import { Picture, Doc } from '../../../asset/convertedSvg'
import Container from './styles'

const Accounts = () => {
  return (
    <Container>
      <div className="col--1">
        <header>
          <h2>Basic Details</h2>
        </header>
        <div className="content--item">
          <div className="item--row">
            <p>Full Name</p>
            <p>John Doe</p>
          </div>
          <div className="item--row">
            <p>Email Address</p>
            <p>johndoe@gmail.com</p>
          </div>{' '}
          <div className="item--row">
            <p>Phone Number</p>
            <p>08032805684</p>
          </div>{' '}
          <div className="item--row">
            <p>Home Address</p>
            <p>12, johndoe street, lekki, Lagos</p>
          </div>{' '}
          <div className="item--row">
            <p>Last Login</p>
            <p>24th July, 2021</p>
          </div>
          <div className="item--row">
            <p>Gender</p>
            <p>Male</p>
          </div>
          <div className="item--row">
            <p>Date of Birth</p>
            <p>24th July, 2021</p>
          </div>
          <div className="item--row">
            <p>BVN</p>
            <p>2343545194</p>
          </div>
        </div>
      </div>

      <div className="col--2">
        <header>
          <h2>Verification</h2>
        </header>
        <div className="content--item">
          <div className="item--row">
            <p>Verification Stage</p>
            <p>Level 2</p>
          </div>
          <div className="item--row">
            <p>Verification Method</p>
            <p>Okra</p>
          </div>
          <div className="card--container">
            <hgroup>
              <p>Verification Documents</p>
            </hgroup>
            <div className="card--row">
              <div className="card--item">
                <Picture />
                <p>Selfie.jpg</p>
                <p>321 kb</p>
              </div>
              <div className="card--item">
                <Doc />
                <p>National ID.doc</p>
                <p>200 kb</p>
              </div>
              <div className="card--item">
                <Doc />
                <p>Voters card.pdf</p>
                <p>200 kb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Accounts
