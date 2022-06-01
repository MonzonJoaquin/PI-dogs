import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Action from "../Buttons/Action";

export default function Presentation({}) {
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
	}
	return (
		<>
			<Form
				inputSelection={[
					{
						id: "Orden",
						text: "Seleccione un orden de listado",
						options: [
							{ value: "Alf Asc" },
							{ value: "Alf Desc" },
							{ value: "Peso Asc" },
							{ value: "Peso Desc" },
						],
					},
				]}
				inputDatalist={[
					{
						id: "Razas",
						text: "Razas disponibles",
						options: [
							{ value: "Raza 1" },
							{ value: "Labrador" },
							{ value: "Dogo" },
							{ value: "Caniche" },
							{ value: "Bulldog" },
							{ value: "Pitbull" },
						],
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
				content={"Buscar raza de perro"}
			/>
			
		</>
	);
}

/*
		this.inputText = this.props.inputText ? this.props.inputText : [];
		this.inputRadio = this.props.inputRadio ? this.props.inputRadio : [];
		this.inputCheck = this.props.inputCheck ? this.props.inputCheck : [];


// nameBreed: this.props.nameBreed,
// weight_min: this.props.weight_min,
// weight_max: this.props.weight_max,
// height_min: this.props.height_min,
// height_max: this.props.height_max,
// years_of_life_min: this.props.years_of_life_min,
// years_of_life_max: this.props.years_of_life_max,
*/

/*

*/
