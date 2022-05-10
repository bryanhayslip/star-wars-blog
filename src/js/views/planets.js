import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPlanetByID } from "../api";

export const Planets = () => {
    const [planet, setPlanet] = React.useState({})
    const params = useParams ()

    React.useEffect(() => {
		getPlanetByID(params.id).then(info => setPlanet(info))
	}, []);

    return (
        <div>
            <h1>This planet is called {planet !==null ? planet.name : ""}</h1>
        </div>
    )
}