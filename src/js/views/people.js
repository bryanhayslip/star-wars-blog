import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPeopleByID } from "../api";

export const People = () => {
   const [people, setPeople] = React.useState(null)
    const params = useParams ()
    
    
    React.useEffect(() => {
		const fn = async () => {
			const apiPeople = await getPeopleByID(params.id);
			setPeople(apiPeople);
		};
		fn();
	}, []);
    
    return (
       <h1>hello {people !==null ? people.name : ""}</h1>
   ) 
}