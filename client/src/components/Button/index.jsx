import React  from 'react'

export default function index({content, action=null, active = true, style}) {
  return (
    active? <button className={style} onClick={action}>{content}</button>: <button className='' onClick={action} disabled>{content}</button>
  )
}

