import React, { useState } from "react";
import { useSelector } from "react-redux";
import Paginated from "../../components/Paginated/paginated";
import Card from "../../components/Section";

export default function Cards() {
	// Traer del estado global un arreglo de objetos con qué razas renderizar
	const data = useSelector((state) => state.dogs);
	const [index, setIndex] = useState(1);
	const lastIndex = index * 8;
	const firstIndex = lastIndex - 8;

	let paginated = data.filter.slice(firstIndex, lastIndex);

	let restructuring = paginated.map((e) => {
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
		<>
			{restructuring[0] ? (<Card elements={restructuring} />) : (<h4>Cargando...</h4>)}
			<Paginated max={data.filter.length} page={8} action={setIndex} />
		</>
	);
}
