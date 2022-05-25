import { NavLink, Outlet } from "react-router-dom";

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
						<NavLink to="/creation">Crear raza de perro</NavLink>
					</li>
					<li>
						<NavLink to="/account">Cuenta</NavLink>
					</li>
					<li>
						<NavLink to="/game">Mascota virtual</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}
