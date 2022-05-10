import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../favorites";

export const Navbar = () => {
  const { favorites, setFavorites } = React.useContext(FavoritesContext);
  //   const isFavorited = favorites.includes(props.uid);
  console.log(favorites);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div className="ml-5">
        {/* <button className="btn btn-primary">{`Favorites (${favorites.length})`}</button> */}
        
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {`Favorites (${favorites.length})`}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
		  {favorites.map((item, index) => {
          return (
            <li className="dropdown-item" key={index} href="#">
              {item.name}
            </li>
          );
        })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
