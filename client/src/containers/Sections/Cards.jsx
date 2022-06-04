import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Paginated from "../../components/Paginated";
import Card from "../../components/Section";

export default function Cards() {
	// Traer del estado global un arreglo de objetos con qué razas renderizar
	const [index, setIndex] = useState(0);
	const data = useSelector((state) => state.dogs);

	let paginated = data.filter.slice(index, index + 8);

	let restructuring = paginated.map((e) => {
		return {
			id: e.id,
			name: e.name,
			image: e.image,
			attributes: [
				[
					"Grupo de raza",
					e.breed_group ? e.breed_group : "No pertenece a ninguna",
				],
				["Temperamentos", e.temperament ? e.temperament : "No hay registros"],
				["Altura", `${e.height[0]}` + (e.height[1] ? ` - ${e.height[1]}` : "")],
				["Peso", e.weight[0] + (e.weight[1] ? ` - ${e.weight[1]}` : "")],
				[
					"Años de vida en promedio",
					e.life_span[0] + (e.life_span[1] ? ` - ${e.life_span[1]}` : ""),
				],
			],
		};
	});

	return (
		<>
			{restructuring[0] ? (
				<Card elements={restructuring} />
			) : (
				<h4>Cargando...</h4>
			)}
			<Paginated max={data.filter.length} index={index} action={setIndex} />
		</>
	);
}

// 260
// VM9455:2 261
// VM9455:2 262
// VM9455:2 264
