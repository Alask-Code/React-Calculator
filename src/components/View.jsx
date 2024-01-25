import React from 'react'

export default function View(props) {
  return (
        <div
        className='
        p-1
        flex
      bg-emerald-900
        text-2xl
        flex-col
        h-screen
        items-center
        justify-center
      '
      >{props.children}
        </div>
  )
}
