import React from 'react'

export default function Result(props) {
  return <input
    placeholder={props.placeholder}
    value={props.value}
    className='
    text-6xl
  placeholder-zinc-600
  text-zinc-900
    p-6
    h-1/6
    text-right
    w-full
    rounded-md'
    type="text"
    readOnly
     />
}
