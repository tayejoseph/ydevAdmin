import React from 'react'
import { Table } from 'antd'
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
  ...props
}) => {
  return (
    <Container className={`custom--container ${className}`}>
      <header className="table--header">
        <h1>{title}</h1>
      </header>
      <div className="table--grid__container">
        <div className="header--action">
          <p>Show</p>
          <Button>5</Button>
          <p>Entries</p>
        </div>
        <form>
          <div className="input--container">
            <input placeholder="Search" />
          </div>
          <CSVLink data={dataSource ? dataSource : []}>
            <button>Export Data</button>
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
              dataSource: dataSource ? dataSource : [],
              columns,
              loading: dataSource === '',
              ...props,
            }}
          />
        )}
      </div>
    </Container>
  )
}

export default TableContainer
