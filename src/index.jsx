import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Menu } from './Menu'

const textarea = document.getElementById('text-input')
const menuContainer = document.getElementById('menu-container')

/**
 * Add work here:
 */

document.addEventListener('keypress', (e) => {
  // Ignore unless textarea is focused
  if (e.target !== textarea) return

  // Modern standards for ensuring correct keys pressed
  if (e.shiftKey && e.code === 'Period') {
    // Prevent default so the period isn't written to text
    e.preventDefault()

    // Extract menu render logic into a helper
    renderMenu()
  }
})

const unrenderMenu = () => {
  menuContainer.innerHTML = ``
}

const renderMenu = () => {
  // Get bounding rect for positioning
  const { x, y, width, height } = textarea.getBoundingClientRect()

  // Create a container to control the menu size and position
  const container = document.createElement('div')
  Object.assign(container.style, {
    width: `${width}px`,
    height: `${height}px`,
    left: `${x}px`,
    top: `${y + height}px`,
    position: 'fixed',
  })

  // Render the container into the DOM
  unrenderMenu()
  menuContainer.append(container)

  // Render the menu into the container
  ReactDOM.render(
    <Menu
      onSelect={(city) => {
        textarea.value = textarea.value + city
        unrenderMenu()
      }}
    />,
    container,
  )
}

// (Nice to have) Some way of hiding the menu when it loses focus
//  Requires tabindex="0" in index.html
menuContainer.addEventListener('focusout', (e) => {
  if (menuContainer.contains(e.relatedTarget)) return
  unrenderMenu()
})
