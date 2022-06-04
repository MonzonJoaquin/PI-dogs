import React from "react";

export default function Card({ elements }) {
	// traer de Container un arreglo de objetos con propiedad (caracteristica del perro ej: altura, peso, etc) y su valor

	return (
		<>
			{elements.map((e) => (
				<div key={e.id} className="Card" style={{display: "inline"}}>
					<h4>{e.name}</h4>
					<img src={e.image} alt="Imagen ilustrativa de la raza del perro" style={{height: "100px"}}/>
					{e.attributes.map((e, i) => (
						<div key={i}>
							<p>
								{e[0]} = <span>{e[1]}</span>
							</p>
						</div>
					))}
				</div>
			))}
		</>
	);
}
