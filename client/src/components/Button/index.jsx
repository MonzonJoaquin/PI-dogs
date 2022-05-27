import React from 'react'

export default function index({content, action=null}) {
  return (
    <>
      <button onClick={action}>{content}</button>
    </>
  )
}

