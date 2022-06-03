import React, { useEffect } from "react";

import Directional from "../../containers/Buttons/Directional";

import img_dog from "../../../src/assets/dog.png";

import { useDispatch } from 'react-redux'
import { fetchAllDogs } from '../../controllers/reducer'

export default function Home_page() {
	
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAllDogs())
	})

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

