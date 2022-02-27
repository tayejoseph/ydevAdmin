import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { CSVLink } from 'react-csv'
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
        Object.entries(item).forEach((data) => {
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
      return
    }
  }, [searchVal, dataSource])

  return (
    <Container className={`custom--container ${className}`}>
      <header className="table--header">
        <h1>{title}</h1>
      </header>
      <div className="table--grid__container">
        <div className="header--action"></div>
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
