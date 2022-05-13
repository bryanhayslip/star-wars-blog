import React from "react";
import { FavoritesContext } from "../favorites";
import Starwars from "../../img/Star-wars-logo.jpg"

export const PeopleCard = (props) => {
  const { favorites, setFavorites } = React.useContext(FavoritesContext);
  const isFavorited = favorites.find((item) => item.name == props.character.name);

  return (
    <div className="border border-danger col-3 m-3">
      <div className="card card-block">
        <h5 className="card-title">{props.character.name}</h5>

        <img src={Starwars} />
        <div className="card-footer d-flex">
          <div className="left-button">
          <a href={"/people/" + props.uid} className="btn btn-primary">
            {props.character.name}
          </a>
          </div>
          <div className="right-button">
          {isFavorited ? (
            <button
              onClick={() => {
                setFavorites(
                  favorites.filter((object) => object.name !== props.character.name)
                );
              }}
              className="btn btn-success"
            >
              unfavorite
            </button>
          ) : (
            <button
              onClick={() => {
                setFavorites([
                  ...favorites,
                  { name: props.character.name, id: props.uid },
                ]);
              }}
              className="btn btn-warning"
            >
              favorite
            </button>
            
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
