import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Card from "../../components/Section/"
import { fetchAllDogs } from '../../controllers/action'


export default function DetailBreed_page() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllDogs())
  },[dispatch])

  let {id} = useParams()
  const data = useSelector(state => state.dogs)
  console.log(id, data);
  const dog = data.list.filter(e => e.id === Number(id) || e.id === id).map((e) => {
		return {
			id: e.id,
			name: e.name,
			image: e.image,
			attributes: [
				["Grupo de raza", e.breed_group ? e.breed_group : "No pertenece a ninguna",],
				["Temperamentos", e.temperament ? e.temperament : "No hay registros"],
				["Altura", `${e.height[0]}` + (e.height[1] ? ` - ${e.height[1]}` : ""), " cm"],
				["Peso", e.weight[0] + (e.weight[1] ? ` - ${e.weight[1]}` : ""), " kg"],
				["Años de vida en promedio", e.life_span[0] + (e.life_span[1] ? ` - ${e.life_span[1]}` : ""), " años",],
			],
		};
	});

  return (
    <Card elements={dog?dog:[]}/>
  )
}

