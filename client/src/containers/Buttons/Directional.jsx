import React from 'react'
import { Link } from 'react-router-dom'

import Button from "../../components/Button/index"


export default function Directional({direction}) {
  return (
    <Button content={<Link to={direction}>Ingresar</Link>} />
  )
}

