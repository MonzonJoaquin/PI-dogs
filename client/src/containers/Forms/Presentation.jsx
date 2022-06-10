import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import { restartCurrent, setDogsFilter } from "../../controllers/reducer";
import Action from "../Buttons/Action";

import styles from "./Presentation.module.css"

export default function Presentation() {
	//Estado local del form
	const [form, setForm] = useState({
		order: "Alfabéticamente ascendente",
		selection: "",
		temperament: 'All',
		weightMin: 0,
		weightMax: 100,

		heightMin: 0,
		heightMax: 100,

		years_of_life_min: 0,
		years_of_life_max: 25,

		created: "API y DB",
	});

	const data = useSelector((state) => state.dogs);
	let restructuring = data.list.map((e) => {
		return {
			value: e.name,
		};
	});
	let temperaments = data.temperament.map((e) => {
		return {
			value: e.name,
		};
	})
	temperaments.unshift({value: 'All'});
	const dispatch = useDispatch();

	// Set state form
	function onChanceStateInput(e) {
			setForm({
				...form,
				[e.target.name]: Number.isNaN(Number(e.target.value))
					? e.target.value
					: Number(e.target.value),
			});
	}

	// Order function
	const order = {
		AlfDesc: function (a, b) {
			if (a.name > b.name) {
				return -1;
			}
			if (a.name < b.name) {
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

	//filter y ordenamiento
	function submit(form) {
		let comparation;

		switch (form.order) {
			case "Alfabéticamente descendente":
				comparation = order.AlfDesc;
				break;
			case "Alfabéticamente ascendente":
				comparation = order.AlfAsc;
				break;
			case "Peso descendente":
				comparation = order.WeightDesc;
				break;
			case "Peso ascendente":
				comparation = order.WeightAsc;
				break;
			case "Altura descendente":
				comparation = order.HeightDesc;
				break;
			case "Altura ascendente":
				comparation = order.HeightAsc;
				break;
			case "Longevidad descendente":
				comparation = order.LifeSpanDesc;
				break;
			case "Longevidad ascendente":
				comparation = order.LifeSpanAsc;
				break;
			default:
		}

		dispatch(
			setDogsFilter(
				data.list
					.filter(
						(e) =>
							(form.temperament==='All'?true:e.temperament?.includes(form.temperament)) &&
							(form.selection? e.name.startsWith(form.selection.toLowerCase()): true) &&
							(form.created === "API y DB"?true:form.created==="Solo API"?e.createdInDB!==true:e.createdInDB===true) &&	
							e.weight[0] > form.weightMin &&
							(e.weight[1]? e.weight[1] < form.weightMax: e.weight[0] < form.weightMax) &&
							e.height[0] > form.heightMin &&
							(e.height[1]? e.height[1] < form.heightMax: e.height[0] < form.heightMax) &&
							e.life_span[0] > form.years_of_life_min &&
							(e.life_span[1]? e.life_span[1] < form.years_of_life_max: e.life_span[0] < form.years_of_life_max)
					)
					.sort(comparation)
			)
		);
		dispatch(restartCurrent())
	}

	return (
		<div className={styles.form}>
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
						style: styles.selection
					},
					{
						id: "Temperament",
						name: "temperament",
						text: "Temperamentos",
						options: temperaments,
						action: onChanceStateInput,
						style: styles.temperament
					},
					{
						id: "created",
						name: "created",
						text: "Seleccione el filtro de creación",
						options: [
							{ value: "API y DB" },
							{ value: "Solo API" },
							{ value: "Solo DB" },
						],
						action: onChanceStateInput,
						style: styles.created
					},
				]}
				inputDatalist={[
					{
						id: "Razas",
						name: "selection",
						text: "Razas disponibles",
						options: restructuring,
						action: onChanceStateInput,
						style: styles.datalist
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
						style: styles.weightMin
					},
					{
						name: "weightMax",
						label: "Peso máximo",
						min: form.weightMin,
						max: 100,
						value: form.weightMax,
						action: onChanceStateInput,
						style: styles.weightMax
					},
					{
						name: "heightMin",
						setmid: "heightMid",
						label: "Altura minima",
						min: 0,
						max: form.heightMax,
						value: form.heightMin,
						action: onChanceStateInput,
						style: styles.heightMin
					},
					{
						name: "heightMax",
						label: "Altura máxima",
						min: form.heightMin,
						max: 100,
						value: form.heightMax,
						action: onChanceStateInput,
						style: styles.heightMax
					},
					{
						name: "years_of_life_min",
						setmid: "years_of_life_mid",
						label: "Años de vida minimo",
						min: 0,
						max: form.years_of_life_max,
						value: form.years_of_life_min,
						action: onChanceStateInput,
						style: styles.lifeSpanMin
					},
					{
						name: "years_of_life_max",
						label: "Años de vida máximo",
						min: form.years_of_life_min,
						max: 25,
						value: form.years_of_life_max,
						action: onChanceStateInput,
						style: styles.lifeSpanMax
					},
				]}
				action={onChanceStateInput}
			/>
			<Action action={(e) => { submit(form)}} content={"Buscar perros"} style={styles.submit}/>
		</div>
	);
}

