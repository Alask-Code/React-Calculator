import React from 'react'

export default function Button(props) {
  let buttonClass = `
    rounded-md
    text-white
    hover:bg-opacity-75
    transition
    duration-300
  `

  if (props.equals) {
    buttonClass += `
      bg-orange-500
      hover:bg-orange-600
    `
  } else {
    buttonClass += `
      bg-emerald-500
      hover:bg-emerald-600
    `
  }

  return (
    <button
      onClick={props.onClick}
      className={buttonClass.trim()}
      disabled={props.disabled}
    >{props.children}
    </button>
  )
}
