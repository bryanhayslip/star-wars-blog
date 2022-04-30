import React from "react";
import { getPeople } from "../api";

import "../../styles/home.css";

export const Home = () => {

	const [people, setPeople] = React.useState([]);

	React.useEffect(() => {
		const fn = async () => {
			const apiPeople = await getPeople();
			setPeople(apiPeople);
		};
		fn();
	}, []);

	return (
		
		<div className="card-group">
					{people.map((item, index) => (
						<div className="border border-danger col-3">
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
	)
	
};
