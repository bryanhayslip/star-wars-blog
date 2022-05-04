import React from "react";
import { getPeople } from "../api";
import { getPlanet } from "../api";
import { getVehicles } from "../api";
import { FavoritesContext } from "../favorites";

import "../../styles/home.css";
import { PeopleCard } from "../component/peoplecard";
import { PlanetsCard } from "../component/planetscard";
import { VehiclesCard } from "../component/vehiclescard";

export const Home = () => {
  const [people, setPeople] = React.useState([]);
  const [planet, setPlanet] = React.useState([]);
  const [vehicle, setVehicle] = React.useState([]);
  const { favorites, setFavorites } = React.useContext(FavoritesContext);

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
           <PeopleCard name = { item.name } uid = { item.uid } key = {index}/>
          ))}
        </div>
      </div>
      {/* Planets card group */}
      <div className="planets">
        <h1 className="section-header">Planets</h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {planet.map((item, index) => (
            <PlanetsCard name = { item.name } uid = { item.uid } key = {index}/>
          ))}
        </div>
      </div>

      {/* Vehicles card group */}

      <div className="vehicles">
        <h1 className="section-header">Vehicles</h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {vehicle.map((item, index) => (
            <VehiclesCard name = { item.name } uid = { item.uid } key = {index}/>
          ))}
        </div>
      </div>
    </div>
  );
};
