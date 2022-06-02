import React  from 'react'

export default function index({content, action=null, active = true}) {
  return (
    active? <button onClick={action}>{content}</button>: <button onClick={action} disabled>{content}</button>
  )
}

