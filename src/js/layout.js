import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { People } from "./views/people";
import { Vehicles } from "./views/vehicles";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./views/planets";
import { FavoritesContext } from "./favorites";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [favorites, setFavorites] = React.useState([])

	return (
		<div className="thebody">
			<FavoritesContext.Provider value = {{favorites, setFavorites}}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/people/:id">
							<People />
						</Route>
						<Route exact path="/planets/:id">
							<Planets />
						</Route>
						<Route exact path="/vehicles/:id">
							<Vehicles />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
			</FavoritesContext.Provider>
		</div>
	);
};

export default injectContext(Layout);
