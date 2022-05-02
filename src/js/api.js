export async function getPeopleByID(id) {
	const response = await fetch(
		"https://www.swapi.tech/api/people/"+id
	);
	const payload = await response.json();

	return payload.result.properties;
}

export async function getPeople() {
    const response = await fetch(
        "https://www.swapi.tech/api/people/"
    );
    const payload = await response.json();
    return payload.results; 
}

export async function getPlanetByID(id) {
	const response = await fetch(
		"https://www.swapi.tech/api/planets/"+id
	);
	const payload = await response.json();

	return payload.result.properties;
}
export async function getPlanet() {
    const response = await fetch(
        "https://www.swapi.tech/api/planets/"
    );
    const payload = await response.json();
    return payload.results; 
}

export async function getVehiclesByID(id) {
    const response = await fetch(
        "https://www.swapi.tech/api/vehicles/"+id
    );
    const payload = await response.json();
    return payload.result.properties;
}

export async function getVehicles() {
    const response = await fetch (
        "https://www.swapi.tech/api/vehicles/"
    );
    const payload = await response.json();
    return payload.results;
}