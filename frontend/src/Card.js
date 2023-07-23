import React from "react";
import './App.css';
const Card = ({ id, title, bse, nse, profit, isChecked, toggleChecked }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p><b>BSE price: </b>{bse}</p>
        <p><b>NSE price: </b>{nse}</p>
        <p><b>Profit: </b>{profit}</p>
        <input
          id="cardcheck"
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleChecked(id)}
        />
      </div>
    </div>
  );
};

export default Card;
