import React from "react";
import { FavoritesContext } from "../favorites";


export const PeopleCard = (props) => {

    const { favorites, setFavorites } = React.useContext(FavoritesContext);
const isFavorited = favorites.find((item) => item.name == props.name)

  return (
    <div className="border border-danger col-3 m-3">
      <div className="card card-block">
        <h5 className="card-title">{props.name}</h5>
        
        <p className="card-text">Hi</p>
        <div className="card-footer">
          <a href={"/people/" + props.uid} className="btn btn-primary">
            {props.name}
          </a>
          { isFavorited ? <button onClick={() => {
              setFavorites(favorites.filter(object => object.name !== props.name 
              ))
          }}  className="btn btn-success">unfavorite</button> :
          <button onClick={() => {
              setFavorites([...favorites, {name: props.name, id: props.uid}])
          }} className="btn btn-warning">favorite</button>}
        </div>
      </div>
    </div>
  );
};
