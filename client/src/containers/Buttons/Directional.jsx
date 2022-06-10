import React from 'react'
import { Link } from 'react-router-dom'

import Button from "../../components/Button/index"


export default function Directional({direction, styles}) {
  return (
    
    <Link to={direction}><Button style={styles} content={"Ingresar"} /></Link>
  )
}

