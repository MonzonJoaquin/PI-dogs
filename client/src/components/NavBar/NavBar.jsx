//Importación de componentes
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
//Importación de estilos
import styles from "./styles.module.css";
export default function NavBar() {
	return (
		<>
			<div className={"main"}>
				<nav className={styles.navbar}>
					<ul className={styles.ul}>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/main">Listado de perros</NavLink>
						</li>
						<li>
							<NavLink to="/main/creation">Crear raza de perro</NavLink>
						</li>
					</ul>
					<span className={styles.line}></span>
				</nav>
				<div>
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	);
}
