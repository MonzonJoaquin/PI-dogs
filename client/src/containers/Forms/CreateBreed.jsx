import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import Action from "../Buttons/Action";
import Error from "../../components/MsgError/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDogs, postDogInDb } from "../../controllers/action";

export default function CreateBreed() {
	const dispatch = useDispatch();

	//Estado local del form
	const [form, setForm] = useState({
		nameBreed: "",
		breedGroup: "No pertenece a ninguna",
		temperament: "Stubborn",
		temperaments: [],
		image: "https://cdn2.thedogapi.com/images/5TKMTrS09.jpg",
		weightMin: 1,
		weightMax: 90,

		heightMin: 1,
		heightMax: 80,

		years_of_life_min: 1,
		years_of_life_max: 20,
	});

	//Estado local de error del form
	const [error, setError] = useState({});

	//Estado local de validación del form
	const [validate, setValidate] = useState(true);

	const data = useSelector((state) => state.dogs);

	let listTemperaments = data.temperament.map((e) => {
		return {
			value: e.name,
		};
	});

	// Set state form
	function onChanceStateInput(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
		switchController(e.target.name, e.target.value);
	}

	//set state temperament
	function pushTemperament(e) {
		console.log(e);
		setForm({
			...form,
			temperaments: form.temperaments.includes(e)
				? [...form.temperaments]
				: [...form.temperaments, e],
		});
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
				return validateForm(/^[a-zA-Z\s.]*$/.test(value), "nombre");
			case "breedGroup":
				return validateForm(/^[a-zA-Z\s.]*$/.test(value), "grupo");
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

	// /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi

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
		if (validate) {
			postDogInDb(form);
			dispatch(fetchAllDogs());
		} else {
			console.log("Algo salio mal");
		}
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
					{
						name: "breedGroup",
						label: "Nombre del grupo de raza",
						value: form.breedGroup,
						action: onChanceStateInput,
					},
				]}
				inputSelection={[
					{
						id: "temperaments",
						name: "temperament",
						text: "Temperamentos disponibles",
						options: listTemperaments,
						action: onChanceStateInput,
					},
				]}
				inputRange={[
					{
						name: "weightMin",

						label: "Peso minimo",
						min: 1,
						max: form.weightMax,
						value: form.weightMin,
						action: onChanceStateInput,
					},
					{
						name: "weightMax",
						label: "Peso máximo",
						min: form.weightMin,
						max: 90,
						value: form.weightMax,
						action: onChanceStateInput,
					},
					{
						name: "heightMin",

						label: "Altura minima",
						min: 1,
						max: form.heightMax,
						value: form.heightMin,
						action: onChanceStateInput,
					},
					{
						name: "heightMax",
						label: "Altura máxima",
						min: form.heightMin,
						max: 80,
						value: form.heightMax,
						action: onChanceStateInput,
					},
					{
						name: "years_of_life_min",

						label: "Años de vida minimo",
						min: 1,
						max: form.years_of_life_max,
						value: form.years_of_life_min,
						action: onChanceStateInput,
					},
					{
						name: "years_of_life_max",
						label: "Años de vida máximo",
						min: form.years_of_life_min,
						max: 20,
						value: form.years_of_life_max,
						action: onChanceStateInput,
					},
				]}
				action={onChanceStateInput}
				inputURL={[
					{
						name: "image",
						text: "Inserte la URL de una imagen",
						id: "image",
						action: onChanceStateInput,
					},
				]}
			/>

			<Action
				action={() => pushTemperament(form.temperament)}
				content={"Añadir temperamento"}
				active={validate}
			/>
			<Action
				action={(e) => submitForm(e)}
				content={"Crear raza de perro"}
				active={validate}
			/>
			<Action
				action={(e) => console.log(form)}
				content={"Log form"}
				active={validate}
			/>
			<div>
				{form.temperaments[0]
					? form.temperaments.map((e, i) => <span key={i}> {e} </span>)
					: null}
			</div>
			{!validate
				? Object.values(error)
						.filter((e) => typeof e !== "object")
						.map((e, i) => (
							<div key={i}>
								<Error msgError={e} />
							</div>
						))
				: null}
		</>
	);
}
