import React from "react";
import Form from "../../components/Form/Form";
import Action from "../Buttons/Action";

export default function CreateBreed({
	nameBreed,
	weight_min,
	weight_max,
	height_min,
	height_max,
	years_of_life_min,
	years_of_life_max,
}) {
	function onChanceStateInput(e) {
		// setear nuevo state del input
		console.log(e.target.value);
	}
	// controlador de state local
	return (
		<>
			<Form
				inputText={[{ label: "Nombre de la raza" }]}
				inputRange={[
					{ id: "peso_min", label: "Peso minimo", min: 0, max: 10 },
					{ id: "peso_max", label: "Peso máximo", min: 10, max: 99 },
					{ id: "altura_min", label: "Altura minima", min: 10, max: 99 },
					{ id: "altura_max", label: "Altura máxima", min: 10, max: 99 },
					{ id: "años_de_vida_min", label: "Años de vida minimo", min: 10, max: 99 },
					{ id: "años_de_vida_max", label: "Años de vida máximo", min: 10, max: 99 },
				]}
				action={onChanceStateInput}
			/>
			<Action action={(e) => console.log} content={"Crear raza de perro"} />
		</>
	);
}
