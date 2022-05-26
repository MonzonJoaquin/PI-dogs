import React from 'react'

export default function Card({}) {
  // traer de Container un arreglo de objetos con propiedad (caracteristica del perro ej: altura, peso, etc) y su valor

  return (
    <div className='Card'>
      <h3>Nombre de la raza</h3> 
      <img src="" alt="Imagen ilustrativa de la raza del perro" />
      <p>Propiedad = <span>Valor</span></p>
    </div>
  )
}

