import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.fiq}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.def}</dd>
    </div>
  );
}
export default Card;
