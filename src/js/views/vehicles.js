import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getVehiclesByID } from "../api";

export const Vehicles = () => {
    const [vehicles, setVehicles] = React.useState(null)
    const params = useParams();

    React.useEffect(() => {
		const fn = async () => {
			const apiVehicles = await getVehiclesByID(params.id);
			setVehicles(apiVehicles);
		};
		fn();
	}, []);

    return (
        <div>
            <h1>This vehicle is called {vehicles !== null ? vehicles.name : ""}</h1>
        </div>
    )
}