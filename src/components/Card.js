import React from "react";
import "./Card.css";

const Card = (props) => {
  // data not available on first run causing error, if check applied
  if (props.starWarsData) {
    const htmlData = props.starWarsData.map((item, index) => {
      return (
        <div className="card" key={index}>
          <h3>{item.name}</h3>
          <p>Model: {item.model}</p>
          <small>Manufacturer: {item.manufacturer}</small>
        </div>
      );
    });
    return <div className="card-grid">{htmlData}</div>;
  } else {
    console.log("No Data...Yet");
  }
};

export default Card;
