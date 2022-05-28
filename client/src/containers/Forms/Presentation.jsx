import React from "react";
import Form from "../../components/Form/Form";
import Action from "../Buttons/Action"


export default function Presentation({

}) {

  function onChanceStateInput(e){ // setear nuevo state del input
    console.log(e.target.value);
  }
  // controlador de state local
	return (
		<>
			<Form
				inputSelection={[{id:"Orden", text:"Orden", options:[{value:"Alf Asc"},{value:"Alf Desc"},{value:"Peso Asc"},{value:"Peso Desc"}]}]}
				inputDatalist={[{id:"Razas", options:[{value:"Raza 1"},{value:"Labrador"},{value:"Dogo"},{value:"Caniche"},{value:"Bulldog"},{value:"Pitbull"},]}]}
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
      <Action action={(e) => console.log} content={"Buscar raza de perro"}/>
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
