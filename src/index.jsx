import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Menu } from './Menu'

const textarea = document.getElementById('text-input')
const menuContainer = document.getElementById('menu-container')

/**
 * Open a country capital menu on keystroke (Shift + .)
 *  Only opens when the textarea has focus.
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

const renderMenu = () => {
  // Get bounding rect for positioning
  const { x, y, width, height } = textarea.getBoundingClientRect()

  // Create a container to control the menu size and position
  const container = document.createElement('div')
  Object.assign(container.style, {
    width: `${width}px`,
    height: `200px`,
    left: `${x}px`,
    top: `${y + height}px`,
    position: 'fixed',
  })

  // TODO: Improve the position of the menu
  //  ...

  // Un-render any existing menu
  unrenderMenu()

  // Render the menu container into the DOM
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

/**
 * Hide the menu when it loses focus
 */
menuContainer.addEventListener('focusout', (e) => {
  if (menuContainer.contains(e.relatedTarget)) return
  unrenderMenu()
})

const unrenderMenu = () => {
  menuContainer.innerHTML = ``
}
