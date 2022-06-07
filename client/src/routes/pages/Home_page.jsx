import React, { useEffect } from "react";
//Importación de contenedores
import Directional from "../../containers/Buttons/Directional";
//Importación de estilos y assets
import img_dog from "../../../src/assets/dog.png";
import styles from "../styles/Home-page.module.css";
//Importación de redux
import { useDispatch } from "react-redux";
import { fetchAllDogs } from "../../controllers/action";

export default function Home_page() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllDogs());
	});

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Bienvenidos a Dog API</h1>
			</header>
			<img src={img_dog} alt="Imagen de un perro" className={styles.logo} />
			<main className={styles.main}>
				<Directional direction={"/main"} styles={styles.button} />
			</main>
		</div>
	);
}
