import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Action from "../Buttons/Action";
import Error from "../../components/MsgError/Error.jsx";

export default function CreateBreed() {
	//Estado local del form
	const [form, setForm] = useState({
		nameBreed: "Nombre de la raza",

		weightMin: 1,
		weightMax: 120,

		heightMin: 1,
		heightMax: 130,

		years_of_life_min: 1,
		years_of_life_max: 25,

		weightMid: 60,
		heightMid: 65,
		years_of_life_mid: 12,
	});

	//Estado local de error del form
	const [error, setError] = useState({});

	//Estado local de validación del form
	const [validate, setValidate] = useState(true);

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
		switchController(e.target.name, e.target.value);
	}

	// controlador form
	function switchController(key, value) {
		let number = Number(value);
		switch (key) {
			case "weightMin":
				return validateForm(
					number < form.weightMax && number > 0 && number < 121,
					"peso"
				);
			case "weightMax":
				return validateForm(
					number > form.weightMin && number > 1 && number < 121,
					"peso"
				);
			case "heightMin":
				return validateForm(
					number < form.heightMax && number > 0 && number < 131,
					"altura"
				);
			case "heightMax":
				return validateForm(
					number > form.heightMin && number > 1 && number < 131,
					"altura"
				);
			case "nameBreed":
				return validateForm(/^[a-zA-Z\s\.]*$/.test(value), "nombre");
			case "years_of_life_min":
				return validateForm(
					number < form.years_of_life_max && number > 1 && number < 26,
					"años de vida"
				);
			case "years_of_life_max":
				return validateForm(
					number > form.years_of_life_min && number > 1 && number < 26,
					"años de vida"
				);
			default:
				break;
		}
	}

	//Guarda en el estado local los errores o los elimina
	function validateForm(validate, key) {
		validate
			? setError({ ...error, [key]: null })
			: setError({ ...error, [key]: `La propiedad ${key} es incorrecta` });
	}

	//Ante cada cambio comprueba si hay errores
	useEffect(() => {
		setValidateForm() ? setValidate(true) : setValidate(false);
	}, [form, validate]);

	//valida si el estado local error tiene errores
	function setValidateForm() {
		return Object.values(error).every((e) => typeof e === "object");
	}

	//Submit form
	function submitForm(e) {
		e.preventDefault();
		console.log("click", form);
		validate ? console.log("Datos enviados") : console.log("Datos incorrectos");
	}

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
						min: 1,
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
				action={(e) => submitForm(e)}
				content={"crear raza de perro"}
				active={validate}
			/>
			{!validate
				? Object.values(error)
						.filter((e) => typeof e != null)
						.map((e, i) => (
							<div key={i}>
								<Error msgError={e} />
							</div>
						))
				: null}
		</>
	);
}
