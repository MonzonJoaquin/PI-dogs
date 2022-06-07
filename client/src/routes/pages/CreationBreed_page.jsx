import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CreateBreed from '../../containers/Forms/CreateBreed'
import { fetchAllTemperaments, fetchAllDogs } from '../../controllers/action'

export default function Account_page() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllDogs())
    dispatch(fetchAllTemperaments())
  })

  return (
    <CreateBreed/>
  )
}