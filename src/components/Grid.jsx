import React from 'react'

export default function Grid(props) {
  return (
    <div
    className='
    p-1
    grid
    h-5/6
    gap-1
    w-screen
    grid-cols-4
    grid-rows-5
     '
     >{props.children}
    </div>
  )
}
