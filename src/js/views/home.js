import React from "react";
import { getPeople } from "../api";
import { getPlanet } from "../api";
import { getVehicles } from "../api";


import "../../styles/home.css";

export const Home = () => {

	const [people, setPeople] = React.useState([]);
	const [planet, setPlanet] = React.useState([]);
	const [vehicle, setVehicle] = React.useState([]);

	React.useEffect(() => {
		const fn = async () => {
			const apiPeople = await getPeople();
			setPeople(apiPeople);
		};
		fn();
	}, []);

	React.useEffect(() => {
		const fn = async () => {
			const apiPlanet = await getPlanet();
			setPlanet(apiPlanet);
		};
		fn();
	}, []);

	React.useEffect(() => {
		const fn = async () => {
			const apiVehicle = await getVehicles();
			setVehicle(apiVehicle);
		};
		fn();
	}, []);

	return (
		<div>
			{/* Character card group */}
		<div className="characters">
			<h1 className="section-header">Characters</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
					{people.map((item, index) => (
						<div className="border border-danger col-3 m-3">
						<div key={index} className="card card-block">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">Hi</p>
							<div className="card-footer">
							<a href= {"/people/" + item.uid} className="btn btn-primary">{item.name}</a>
							</div>
						</div>
						</div>
					))}
					</div>
				</div>
				{/* Planets card group */}
				<div className="planets">
				<h1 className="section-header">Planets</h1>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{planet.map((item, index) => (
						<div className="border border-success col-3 m-3">
					   <div key={index} className="card-body">
						   <h5 className="card-title">{item.name}</h5>
						<a href= {"/planets/" + item.uid} className="btn btn-primary">{item.name}</a>
						</div>
						</div>
					)
					)}
				</div>
				</div>


	{/* Vehicles card group */}
 	
 	<div className="vehicles">	 
	 <h1 className="section-header">Vehicles</h1>
	 <div className="d-flex flex-row flex-nowrap overflow-auto">
	{vehicle.map((item, index) => (
		<div className="border border-primary col-3 m-3">
		<div key={index} className="card-body">
			<h5 className="card-title">{item.name}</h5>
			<a href= {"/vehicles/" + item.uid} className="btn btn-primary">{item.name}</a>
			</div>
		</div>
	))}
	</div>
</div> 


</div>
				
				
	)
	
};
