import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useQuery } from '../../hooks'
import Container from './styles'

const Tabs = ({ tabs, content, width, theme }) => {
  const query = useQuery().get('tab')
  const { url } = useRouteMatch()

  return (
    <Container width={width} className="tab--ui">
      <div className="tab--header">
        <nav>
          {tabs &&
            tabs.map((item) => (
              <div key={`tabLink--${item}`} className="tab--item">
                <Link
                  to={`${url}?tab=${item.key}`}
                  className={query === item.key ? 'active' : null}
                >
                  {item.title}
                </Link>
              </div>
            ))}
        </nav>
      </div>
      <div className="tab--content">{content[query]}</div>
    </Container>
  )
}

export default Tabs
