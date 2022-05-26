import React from 'react'

export default function index({content, action}) {
  return (
    <>
      <button onClick={action}>{content}</button>
    </>
  )
}

