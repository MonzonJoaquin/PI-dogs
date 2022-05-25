import React from "react";

import Directional from "../../containers/Buttons/Directional";

import img_dog from "../../../src/assets/dog.png"

export default function Home_page() {
	return (
		<>
			<div className="title">
				<img src={img_dog} alt="Imagen de un perro" />
				<h1>Bienvenidos a App Dogs</h1>
			</div>
      <Directional direction={"/main"}/> 
		</>
	);
}
