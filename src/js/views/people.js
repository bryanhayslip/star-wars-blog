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
       <div>
          <h1>Name: {people !==null ? people.name : ""}</h1>
       <h2>I'm {people !==null ? people.height : ""} inches tall</h2>
       </div>
   ) 
}