import React from "react";

import Directional from "../../containers/Buttons/Directional";

import img_dog from "../../../src/assets/dog.png";

export default function Home_page() {
	return (
		<>
			<header className="title">
				<img src={img_dog} alt="Imagen de un perro" />
				<h1>Bienvenidos a Dog API</h1>
			</header>
			<main>
				<Directional direction={"/main"} />
			</main>
		</>
	);
}
