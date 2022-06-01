import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Action from "../Buttons/Action";
import Error from "../../components/MsgError/Error.jsx";

export default function CreateBreed() {
	//Estado local del form
	const [form, setForm] = useState({
		nameBreed: "Nombre de la raza",

		weightMin: 1,
		weightMax: 120,

		heightMin: 0.15,
		heightMax: 130,

		years_of_life_min: 1,
		years_of_life_max: 25,

		weightMid: 60,
		heightMid: 65,
		years_of_life_mid: 12,
	});

	//Estado local de error del form
	const [error, setError] = useState(null);

	// Set state form
	function onChanceStateInput(e) {
		if (e.target.dataset.setmid) {
			setForm({
				...form,
				[e.target.name]: e.target.value,
				[e.target.dataset.setmid]: e.target.value,
			});
		} else {
			setForm({ ...form, [e.target.name]: e.target.value });
		}
		switchController([e.target.name], e.target.value);
	}

	// controlador form
	function switchController(key, value) {
		switch (key) {
			case "weightMin": return value<form.weightMax
			case "weightMax": return value>form.weightMin
			case "heightMin": return value<form.heightMax
			case "heightMax": return value>form.heightMin
			case "nameBreed": return /([A-Z])\w+/.test(value)
			case "years_of_life_min": return value<form.years_of_life_max
			case "years_of_life_max": return value>form.years_of_life_min
			default:
				break;
		}
	}

	function valueController(params) {
		
	}

	//Submit form
	function submitForm(params) {}

	return (
		<>
			<Form
				inputText={[
					{
						name: "nameBreed",
						label: "Nombre de la raza",
						value: form.nameBreed,
						action: onChanceStateInput,
					},
				]}
				inputRange={[
					{
						name: "weightMin",
						setmid: "weightMid",
						label: "Peso minimo",
						min: 1,
						max: form.weightMax,
						value: form.weightMin,
						action: onChanceStateInput,
					},
					{
						name: "weightMax",
						label: "Peso máximo",
						min: form.weightMid,
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
						action: onChanceStateInput,
					},
					{
						name: "heightMax",
						label: "Altura máxima",
						min: form.heightMid,
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
						action: onChanceStateInput,
					},
					{
						name: "years_of_life_max",
						label: "Años de vida máximo",
						min: form.years_of_life_mid,
						max: 25,
						value: form.years_of_life_max,
						action: onChanceStateInput,
					},
				]}
				action={onChanceStateInput}
			/>
			<Action
				action={(e) => console.log(form)}
				content={"Crear raza de perro"}
			/>
			{/* {error ? <Error msgError={error} /> : null} */}
		</>
	);
}
