import React from 'react'
import { Table } from 'antd'
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
      <div className="grid--container">
        <div className="header--action">
          <p>Show</p>
          <Button>5</Button>
          <p>Entries</p>
        </div>
        <form>
          <div className="input--container">
            <input placeholder="Search" />
          </div>
          <button>Export Data</button>
        </form>
      </div>

      {rowContent && rowContent()}
      {children ? children : <Table {...{ dataSource, columns, ...props }} />}
    </Container>
  )
}

export default TableContainer
