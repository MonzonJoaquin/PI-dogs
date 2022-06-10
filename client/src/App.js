import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home_page";
import NavBar from "./components/NavBar/NavBar";
import Main from "./pages/Main_page";
import Detail from "./pages/DetailBreed_page";
import Creation from "./pages/CreationBreed_page";
import NotFound from "./pages/NotFound_page";

function App() {
	return (
		<Routes>
			<Route path="" element={<Home />} />
			<Route path="main" element={<NavBar />}>
				<Route path="" element={<Main />} />
				<Route path="detail/:id" element={<Detail />} />
				<Route path="creation" element={<Creation />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
