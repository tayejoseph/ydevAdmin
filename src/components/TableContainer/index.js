import React, { useState, useEffect, useRef } from 'react'
import { Table } from 'antd'
import { RiArrowDownSLine } from 'react-icons/ri'
import { CSVLink } from 'react-csv'
import { Button } from '../../UI'
import Container from './styles'

const TableContainer = ({
  title,
  children,
  dataSource,
  columns,
  className,
  rowContent,
  hasDate,
  ...props
}) => {
  const popUpTimeout = useRef(null)
  const [showMenu, setDisplay] = useState(false)
  const [noPerPage, setNoPerPage] = useState(8)
  const [tableData, setTableData] = useState(dataSource || [])
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    if (searchVal === '') {
      setTableData(dataSource)
    }
  }, [dataSource, searchVal])

  useEffect(() => {
    if (searchVal) {
      const searchedResult = []
      dataSource.map((item) =>
        Object.entries(item).map((data) => {
          if (
            data[1] &&
            typeof data[1] === 'string' &&
            data[1].toLowerCase().includes(searchVal.toLowerCase())
          ) {
            searchedResult.push(item)
          }
        }),
      )

      setTableData(searchedResult)
    }
  }, [searchVal, dataSource])

  const popupBlurHandler = () => {
    popUpTimeout.current = setTimeout(() => {
      setDisplay(false)
    })
  }

  return (
    <Container className={`custom--container ${className}`}>
      <header className="table--header">
        <h1>{title}</h1>
      </header>
      <div className="table--grid__container">
        <div className="header--action">
          {/* <div className="col-1">
            <p>Show</p>
            <div
              className="menu--container"
              onFocus={() => {
                clearTimeout(popUpTimeout.current)
              }}
              onBlur={popupBlurHandler}
            >
              <Button
                className={`display--btn`}
                onClick={() => {
                  setDisplay(!showMenu)
                }}
                aria-haspopup="true"
                aria-expanded={showMenu}
              >
                {noPerPage}{' '}
                <span className={`${showMenu ? 'spin' : ''}`}>
                  <RiArrowDownSLine />
                </span>
              </Button>
              {showMenu && (
                <div className="menu--lists">
                  {[...Array(10).keys()].map((item) =>
                    item % 2 === 0 && item !== 0 ? (
                      <button onClick={() => setNoPerPage(item)} key={item}>
                        {item}
                      </button>
                    ) : null,
                  )}
                </div>
              )}
            </div>

            <p>Entries</p>
          </div>
          <div className="col-2">{hasDate && <input type="date" />}</div> */}
        </div>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="input--container">
            <input
              value={searchVal}
              placeholder="Search"
              onChange={({ target: { value } }) => setSearchVal(value)}
            />
          </div>
          <CSVLink data={dataSource ? dataSource : []}>
            <button type="button">Export Data</button>
          </CSVLink>
        </form>
      </div>
      <div className="table--container">
        {rowContent && rowContent()}
        {children ? (
          children
        ) : (
          <Table
            {...{
              dataSource: tableData,
              columns,
              pagination: { pageSize: noPerPage },
              loading: tableData === '',
              ...props,
            }}
          />
        )}
      </div>
    </Container>
  )
}

export default TableContainer
