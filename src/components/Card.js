import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h2>{props.titulo}</h2>
          <h5 class="card-title">Numero total:</h5>
          <p class="card-text">{props.total}</p>
          <Link to={props.url} className="btn btn-primary">
            Lista de {props.titulo}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
