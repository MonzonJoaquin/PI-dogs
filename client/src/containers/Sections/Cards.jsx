import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Section";

export default function Cards() {
	// Traer del estado global un arreglo de objetos con qué razas renderizar

	const data = useSelector((state) => state.dogs);
	let firstIndex = 0;
	let lastIndex = 8;

	let paginated = data.list.slice(firstIndex, lastIndex);

	console.log(paginated);

	let restructuring = paginated.map((e) => {
		return {
			id: e.id,
			name: e.name,
			image: e.image,
			attributes: [
				["Altura", e.height],
				["Años de vida", e.life_span],
				["Peso", e.weight],
				["Temperamentos", e.temperament],
				["Grupo de raza", e.breed_group],
			],
		};
	});
	return restructuring[0] ? <Card elements={restructuring} /> : null;
}
