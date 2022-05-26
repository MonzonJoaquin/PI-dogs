import { NavLink, Outlet } from "react-router-dom";

import Footer from "../Footer/index";

export default function NavList() {
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
					<li>
						<NavLink to="/main/account">Cuenta</NavLink>
					</li>
					<li>
						<NavLink to="/main/game">Mascota virtual</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
			<Footer />
		</>
	);
}
