import React from "react";
import { getPeople } from "../api";
import { getPlanet } from "../api";

import "../../styles/home.css";

export const Home = () => {

	const [people, setPeople] = React.useState([]);
	const [planet, setPlanet] = React.useState([]);

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

	return (
		<div>
		<div className="card-group">
					{people.map((item, index) => (
						<div className="border border-danger m-3 col-3">
						<div key={index} className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">Hi</p>
							<div className="card-footer">
							<a href= {"/people/" + item.uid} className="btn btn-primary">{item.name}</a>
							</div>
						</div>
						</div>
					))}
				</div>
				<div className="card-group">
					{planet.map((item, index) => (
						<div className="border border-success m-3 col-3">
					   <div key={index} className="card-body">
						   <h5 className="card-title">{item.name}</h5>
						<a href= {"/planets/" + item.uid} className="btn btn-primary">{item.name}</a>
						</div>
						</div>
					)
					)}
				</div>
				</div>
				
	)
	
};
