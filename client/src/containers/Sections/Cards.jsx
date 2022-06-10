import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Paginated from "../../components/Paginated/paginated";
import Card from "../../components/Section";
import { setCurrent } from "../../controllers/reducer";

import styles from './Cards.module.css'

export default function Cards() {
	// Traer del estado global un arreglo de objetos con qué razas renderizar
	const dispatch = useDispatch()
	const data = useSelector((state) => state.dogs);
	
	const lastIndex = data.current * 8;
	const firstIndex = lastIndex - 8;

	let paginated = data.filter.slice(firstIndex, lastIndex);

	const setIndex = (index) => {
		dispatch(setCurrent(index))
	}

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

	return (<>
	<div className={styles.cards}>
			{restructuring[0] ? (<Card elements={restructuring} styles={styles}/>) : (<h4>No hay datos</h4>)}
		</div>
			<Paginated max={data.filter.length} page={8} action={setIndex}/>
	</>
		
	);
}
