import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import capitals from './world-capitals.json'
import './Menu.css'

type OnSelect = (city: string | null) => void

const Caret = () => (
  <svg className="menuCaret" viewBox="0 0 1030 638">
    <path d="M1017 570L541 12Q530 0 515 0t-26 12L13 570q-16 19-7 43.5T39 638h952q24 0 33-24.5t-7-43.5z" />
  </svg>
)

const Item = ({
  country,
  city,
  onSelect,
}: {
  country: string
  city: string | null
  onSelect: OnSelect
}) => {
  return (
    <div className="menuItem" onClick={() => onSelect(city)}>
      {country}
    </div>
  )
}

export const Menu = ({
  onSelect,
}: {
  onSelect: OnSelect
  caretLeft: number
}) => {
  const [filter, setFilter] = useState(/.*/)

  return (
    <div className="menu">
      <div style={{ height: 12, display: 'flex', justifyContent: 'center' }}>
        <Caret />
      </div>
      <div className="menuContent">
        <input
          className="menuSearch"
          /* Begin added */
          autoFocus
          onChange={(e) => {
            try {
              setFilter(new RegExp(e.target.value))
            } catch (e) {
              console.warn(e)
            }
          }}
          /* End added */
        />
        <div className="menuList">
          {capitals
            /* Begin added */
            .filter((x) => filter.test(x.country) || filter.test(x.city ?? ''))
            /* End added */
            .map((x) => (
              <Item
                key={x.country}
                country={x.country}
                city={x.city}
                onSelect={onSelect}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
