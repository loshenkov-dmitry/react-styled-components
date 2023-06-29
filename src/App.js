import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import GlobalStyle from "./globalStyles.js";
import { routes } from "./routes";
import "./styles/App.css";

function App() {
	const links = [
		{ path: "/posts", label: "Posts" },
		{ path: "/about", label: "About" },
	];

	return (
		<Fragment>
			<GlobalStyle />
			<div className="App">
				<BrowserRouter>
					<Navbar links={links} />
					<Routes>
						{routes.map((route) => {
							return (
								<Route
									element={<route.component />}
									key={route.path}
									path={route.path}
									exact={route.exact}
								/>
							);
						})}
					</Routes>
				</BrowserRouter>
			</div>
		</Fragment>
	);
}

export default App;
