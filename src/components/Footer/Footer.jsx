import React from "react";

//Importación de estilos
import styles from "./styles.module.css"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.contact}>
				<h4>Contacto con el desarrollador</h4>
				<ul>
					<li>Dato</li>
					<li>Dato</li>
					<li>Dato</li>
				</ul>
			</div>
			<div className={styles.technologies_implemented}>
				<h4>Tecnologias implementadas</h4>
				<ul>
					<li>React</li>
					<li>Express</li>
					<li>Sequelize</li>
					<li>PSQL</li>
				</ul>
			</div>
			<div></div>
		</footer>
	);
}
