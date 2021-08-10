import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import capitals from './world-capitals.json'
import './Menu.css'

type OnSelect = (city: string | null) => void

export const Item = ({
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

export const Menu = ({ onSelect }: { onSelect: OnSelect }) => {
  const [filter, setFilter] = useState(/.*/)

  return (
    <div className="menu">
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
  )
}
