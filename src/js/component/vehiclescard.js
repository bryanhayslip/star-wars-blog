import React from "react";
import { FavoritesContext } from "../favorites";

export const VehiclesCard = (props) => {
    const { favorites, setFavorites } = React.useContext(FavoritesContext);
  const isFavorited = favorites.includes(props.uid);

  return (
    <div className="border border-primary col-3 m-3">
    <div className="card card-block">
      <h5 className="card-title">{props.name}</h5>
      <a href={"/vehicles/" + props.uid} className="btn btn-primary">
        {props.name}
      </a>
    </div>
  </div>
  )
}