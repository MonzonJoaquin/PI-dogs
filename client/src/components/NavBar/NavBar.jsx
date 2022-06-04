import { NavLink, Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";

export default function NavBar() {
	return (
		<>
			<nav>
				<ul>
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
			</nav>
			<Outlet />
			<Footer />
		</>
	);
}
