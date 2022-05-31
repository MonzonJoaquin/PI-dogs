import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Action from "../Buttons/Action";

export default function CreateBreed() {
	const [form, setForm] = useState({
		nameBreed: "Nombre de la raza",
		weightMin: 1,
		weightMid: 60,
		weightMax: 120,
		heightMin: 0.15,
		heightMid: 70,
		heightMax: 130,
		years_of_life_min: 1,
		years_of_life_min_value: 7,
		years_of_life_max_value: 20,
		years_of_life_max: 25,
	});

	const [values, setValues] = useState({
		years_of_life_mid: form.years_of_life_max_value,
	});


	function onChanceStateInput(e) {
		// setear nuevo state del input
		setForm({...form, [e.target.name]: Number(e.target.value)})
	}
	function onChanceValue(e) {
		setValues({years_of_life_max_value: e.target.value})
	}
	// controlador de state local
	return (
		<>
			<Form
				// inputText={[{ label: "Nombre de la raza", value: form.nameBreed }]}
				inputRange={[
					// { id: "peso_min", label: "Peso minimo", min: form.weightMin, max: form.weightMid },
					// { id: "peso_max", label: "Peso máximo", min: form.weightMid, max: form.weightMax },
					// { id: "altura_min", label: "Altura minima", min: form.heightMin, max: form.heightMid },
					// { id: "altura_max", label: "Altura máxima", min: form.heightMid, max: form.heightMax },
					{
						name: "years_of_life_min_value",
						label: "Años de vida minimo",
						min: form.years_of_life_min,
						max: values.years_of_life_mid,
						value: form.years_of_life_min_value,
						action: onChanceStateInput
					},
					{
						name: "years_of_life_max_value",
						label: "Años de vida máximo",
						min: values.years_of_life_mid,
						max: form.years_of_life_max,
						value: form.years_of_life_max_value,
						action: onChanceValue
					},
				]}
				action={onChanceStateInput}
			/>
			<Action action={(e) => console.log(form)} content={"Crear raza de perro"} />
		</>
	);
}
