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