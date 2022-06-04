import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import { setDogsList } from "../../controllers/reducer";
import Action from "../Buttons/Action";

export default function Presentation() {
	//Estado local del form
	const [form, setForm] = useState({
		order: "Alf Desc",
		selection: "",

		weightMin: 1,
		weightMax: 120,

		heightMin: 0.15,
		heightMax: 110,

		years_of_life_min: 1,
		years_of_life_max: 25,

		weightMid: 1,
		heightMid: 1,
		years_of_life_mid: 1,
	});

	const data = useSelector((state) => state.dogs);

	const dispatch = useDispatch();

	let restructuring = data.list.map((e) => {
		return {
			value: e.name,
		};
	});

	// Set state form
	function onChanceStateInput(e) {
		if (e.target.dataset.setmid) {
			setForm({
				...form,
				[e.target.name]: Number.isNaN(Number(e.target.value))
					? e.target.name
					: Number(e.target.value),
				[e.target.dataset.setmid]: Number.isNaN(Number(e.target.value))
					? e.target.name
					: Number(e.target.value),
			});
		} else {
			setForm({
				...form,
				[e.target.name]: Number.isNaN(Number(e.target.value))
					? e.target.name
					: Number(e.target.value),
			});
		}
	}

	//filter y ordenamiento
	function submit(form) {
		console.log(
			data.list.filter(
				(e) =>
					e.weight[0] > form.weightMin &&
					(e.weight[1]
						? e.weight[1] < form.weightMax
						: e.weight[0] < form.weightMax) &&
					e.height[0] > form.heightMin &&
					(e.height[1]
						? e.height[1] < form.heightMax
						: e.height[0] < form.heightMax) &&
					 e.life_span[0] > form.years_of_life_min &&
					(e.life_span[1] ? e.life_span[1] < form.years_of_life_max : e.life_span[0] < form.years_of_life_max)
			)
		);
		dispatch(
			setDogsList(
				data.list.filter(
					(e) =>
						e.weight[0] > form.weightMin &&
						(e.weight[1] ? e.weight[1] < form.weightMax : true)
					// e.height[0] > form.heightMin &&
					// (e.height[1] ? e.height[1] < form.heightMax : true) &&
					// e.life_span[0] > e.years_of_life_min &&
					// (e.life_span[1] ? e.life_span[1] < form.years_of_life_max : true)
				)
			)
		);
	}

	// form.selection?e.name.toLowerCase().includes(form.selection.toLowerCase()):true
	return (
		<>
			<Form
				inputSelection={[
					{
						id: "Orden",
						name: "order",
						text: "Seleccione un orden de listado",
						options: [
							{ value: "Alf Desc" },
							{ value: "Alf Asc" },
							{ value: "Peso Asc" },
							{ value: "Peso Desc" },
						],
						action: onChanceStateInput,
					},
				]}
				inputDatalist={[
					{
						id: "Razas",
						name: "selection",
						text: "Razas disponibles",
						options: restructuring,
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
						max: 110,
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
			<Action action={(e) => console.log(form)} content={"Form"} />
			<Action action={(e) => console.log(data)} content={"Data"} />
			<Action action={(e) => submit(form)} content={"Buscar raza de perro"} />
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
