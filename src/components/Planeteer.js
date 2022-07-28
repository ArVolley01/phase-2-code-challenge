import React from "react";

function Planeteer({ name, from, bday, bio, quote, img, tweet }) {
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={img}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{(bio && bio) || (quote && quote) }</p>
          <div className="card__detail">
            <p>{tweet}</p>
            <p>{`Age: ${new Date().getFullYear() - bday}`}</p>
            <p>
              {
                from ? "From USA" : "Working Overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
