import { useContext } from "react/cjs/react.production.min";
import layout from "./layout";
import { People } from "./views/people";

export async function getPeopleByID(id) {
	const response = await fetch(
		"https://swapi.dev/api/people/"+id
	);
	const payload = await response.json();

	return payload;
}

export async function getPeople() {
    const response = await fetch(
        "https://swapi.dev/api/people/"
    );
    const payload = await response.json();
    return payload.results; 
}

export async function getPlanetByID(id) {
	const response = await fetch(
		"https://swapi.dev/api/planets"+id
	);
	const payload = await response.json();

	return payload.result.properties;
}
export async function getPlanet() {
    const response = await fetch(
        "https://swapi.dev/api/planets"
    );
    const payload = await response.json();
    return payload.results; 
}

export async function getVehiclesByID(id) {
    const response = await fetch(
        "https://swapi.dev/api/vehicles"+id
    );
    const payload = await response.json();
    return payload.result.properties;
}

export async function getVehicles() {
    const response = await fetch (
        "https://swapi.dev/api/vehicles"
    );
    const payload = await response.json();
    return payload.results;
}

// favorites.js
// export const FavoritesContext = React.createContext()

// layout.js
// const [favorites, setFavorites] = React.useState([])

// return <FavoritesContext.Provider value = {}>
//     <.../> <Layout />
// </FavoritesContext.Provider>

// people.js
// const { favorites, setFavorites } = useContext(FavoritesContext)