import React from "react";
import { FavoritesContext } from "../favorites";

export const PlanetsCard = (props) => {
  const { favorites, setFavorites } = React.useContext(FavoritesContext);
  const isFavorited = favorites.includes(props.uid);

  return (
    <div className="border border-success col-3 m-3">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <a href={"/planets/" + props.uid} className="btn btn-primary">
          {props.name}
        </a>
      </div>
    </div>
  );
};
