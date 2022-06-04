import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import { setDogsFilter } from "../../controllers/reducer";
import Action from "../Buttons/Action";

export default function Presentation() {
	//Estado local del form
	const [form, setForm] = useState({
		order: "Alfabéticamente ascendente",
		selection: "",

		weightMin: 0,
		weightMax: 120,

		heightMin: 0,
		heightMax: 110,

		years_of_life_min: 0,
		years_of_life_max: 30,

		weightMid: 0,
		heightMid: 0,
		years_of_life_mid: 0,
	});

	const data = useSelector((state) => state.dogs);
	let restructuring = data.list.map((e) => {
		return {
			value: e.name,
		};
	});

	const dispatch = useDispatch();

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
					? e.target.value
					: Number(e.target.value),
			});
		}
	}

	// Order function
	const order = {
		AlfDesc: function (a, b) {
			if (a.id > b.id) {
				return -1;
			}
			if (a.id < b.id) {
				return 1;
			}
		},
		AlfAsc: function (a, b) {
			if (a.id > b.id) {
				return 1;
			}
			if (a.id < b.id) {
				return -1;
			}
		},
		WeightDesc: function (a, b) {
			if (a.weight[0] < b.weight[0]) {
				return 1;
			}
			if (a.weight[0] > b.weight[0]) {
				return -1;
			}
		},
		WeightAsc: function (a, b) {
			if (a.weight[0] < b.weight[0]) {
				return -1;
			}
			if (a.weight[0] > b.weight[0]) {
				return 1;
			}
		},
		HeightDesc: function (a, b) {
			if (a.height[0] < b.height[0]) {
				return 1;
			}
			if (a.height[0] > b.height[0]) {
				return -1;
			}
		},
		HeightAsc: function (a, b) {
			if (a.height[0] < b.height[0]) {
				return -1;
			}
			if (a.height[0] > b.height[0]) {
				return 1;
			}
		},
		LifeSpanDesc: function (a, b) {
			if (a.life_span[0] < b.life_span[0]) {
				return 1;
			}
			if (a.life_span[0] > b.life_span[0]) {
				return -1;
			}
		},
		LifeSpanAsc: function (a, b) {
			if (a.life_span[0] < b.life_span[0]) {
				return -1;
			}
			if (a.life_span[0] > b.life_span[0]) {
				return 1;
			}
		},
	};

/**
 * 							{ value: "Alfabéticamente descendente" },
							{ value: "Alfabéticamente ascendente" },
							{ value: "Peso descendente" },
							{ value: "Peso ascendente" },
							{ value: "Altura descendente" },
							{ value: "Altura ascendente" },
							{ value: "Longevidad  descendente" },
							{ value: "Longevidad ascendente" },
 * 
 */

	//filter y ordenamiento
	function submit(form) {
		let comparation;

		switch (form.order) {
			case "Alfabéticamente descendente": comparation = order.AlfDesc; break
			case "Alfabéticamente ascendente": comparation = order.AlfAsc; break
			case "Peso descendente": comparation = order.WeightDesc; break
			case "Peso ascendente": comparation = order.WeightAsc; break
			case "Altura descendente": comparation = order.HeightDesc; break
			case "Altura ascendente": comparation = order.HeightAsc; break
			case "Longevidad descendente": comparation = order.LifeSpanDesc; break
			case "Longevidad ascendente": comparation = order.LifeSpanAsc; break
			default:
		}

		dispatch(
			setDogsFilter(
				data.list.filter(
					(e) =>
						(form.selection
							? e.name.startsWith(form.selection.toLowerCase())
							: true) &&
						e.weight[0] > form.weightMin &&
						(e.weight[1]
							? e.weight[1] < form.weightMax
							: e.weight[0] < form.weightMax) &&
						e.height[0] > form.heightMin &&
						(e.height[1]
							? e.height[1] < form.heightMax
							: e.height[0] < form.heightMax) &&
						e.life_span[0] > form.years_of_life_min &&
						(e.life_span[1]
							? e.life_span[1] < form.years_of_life_max
							: e.life_span[0] < form.years_of_life_max)
				).sort(comparation)
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
							{ value: "Alfabéticamente ascendente" },
							{ value: "Alfabéticamente descendente" },
							{ value: "Peso descendente" },
							{ value: "Peso ascendente" },
							{ value: "Altura descendente" },
							{ value: "Altura ascendente" },
							{ value: "Longevidad descendente" },
							{ value: "Longevidad ascendente" },
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
						min: 0,
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
						min: 0,
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
						min: 0,
						max: form.years_of_life_max,
						value: form.years_of_life_min,
						action: onChanceStateInput,
					},
					{
						name: "years_of_life_max",
						label: "Años de vida máximo",
						min: form.years_of_life_mid,
						max: 30,
						value: form.years_of_life_max,
						action: onChanceStateInput,
					},
				]}
				action={onChanceStateInput}
			/>
			<Action action={(e) => console.log(form)} content={"Form"} />
			<Action action={(e) => console.log(data.list)} content={"Data list"} />
			<Action
				action={(e) => console.log(data.filter)}
				content={"Data filter"}
			/>
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
