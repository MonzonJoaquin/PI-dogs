import React from "react";

export default function Card({ elements, styles }) {
	// traer de Container un arreglo de objetos con propiedad (caracteristica del perro ej: altura, peso, etc) y su valor

	return (
		<>
			{elements?.map((e, i) => (
				<div key={e.id} className={styles.card}>
					<div>
						<img src={e.image} alt="Imagen ilustrativa de la raza del perro" />

					</div>
					<h4 className={styles.name}>{e.name}</h4>
					<div className={styles.props}>
						{e.attributes.map((e, i) => (

							<p  key={i} >
								{e[0]} = <span className={styles.span} >{e[1]}{e[2]}</span>
							</p>

						))}</div>
				</div>
			))}
		</>
	);
}
