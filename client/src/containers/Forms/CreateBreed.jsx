import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Action from "../Buttons/Action";

export default function CreateBreed() {
	const [form, setForm] = useState({
		nameBreed: "Nombre de la raza",

		weightMin: 1,
		weightMax: 120,

		heightMin: 0.15,
		heightMax: 130,

		years_of_life_min: 7,
		years_of_life_max: 25,
	});

	const [values, setValues] = useState({
		years_of_life_mid: 20,
		weightMid: 60,
		heightMid: 70,
	});

	function onChanceStateInput(e) {
		// setear nuevo state del input
		setForm({ ...form, [e.target.name]: e.target.value });
	}
	function onChanceValue(e) {
		onChanceStateInput(e);
		setValues({ ...values, [e.target.dataset.setmid]: e.target.value});
	}
	// controlador de state local
	return (
		<>
			<Form
				inputText={[{ name: "nameBreed", label: "Nombre de la raza", value: form.nameBreed, action: onChanceStateInput }]}
				inputRange={[
					{
						name: "weightMin",
						setmid: "weightMid",
						label: "Peso minimo",
						min: 1,
						max: form.weightMax,
						value: form.weightMin,
						action: onChanceValue,
					},
					{
						name: "weightMax",
						label: "Peso máximo",
						min: values.weightMid,
						max: 120,
						value: form.weightMax,
						action: onChanceStateInput,
					},
					{
						name: "heightMin",
						setmid: "heightMid",
						label: "Altura minima",
						min: 0.15,
						max: form.heightMax,
						value: form.heightMin,
						action: onChanceValue,
					},
					{
						name: "heightMax",
						label: "Altura máxima",
						min: values.heightMid,
						max: 130,
						value: form.heightMax,
						action: onChanceStateInput,
					},
					{
						name: "years_of_life_min",
						setmid: "years_of_life_mid",
						label: "Años de vida minimo",
						min: 1,
						max: form.years_of_life_max,
						value: form.years_of_life_min,
						action: onChanceValue,
					},
					{
						name: "years_of_life_max",
						label: "Años de vida máximo",
						min: values.years_of_life_mid,
						max: 25,
						value: form.years_of_life_max,
						action: onChanceStateInput,
					},
				]}
				action={onChanceStateInput}
			/>
			<Action
				action={(e) => console.log(form ,values)}
				content={"Crear raza de perro"}
			/>
		</>
	);
}
