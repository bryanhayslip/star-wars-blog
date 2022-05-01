import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPlanetByID } from "../api";

export const Planets = () => {
    const [planet, setPlanet] = React.useState(null)
    const params = useParams ()

    React.useEffect(() => {
		const fn = async () => {
			const apiPlanet = await getPlanetByID(params.id);
			setPlanet(apiPlanet);
		};
		fn();
	}, []);

    return (
        <div>
            <h1>This planet is called {planet !==null ? planet.name : ""}</h1>
        </div>
    )
}