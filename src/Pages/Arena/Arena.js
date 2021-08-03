import React, {useEffect} from "react";

import Card from "./Card";

import "./Arena.css";

function Arena() {
  function createCard(props) {
    return (
      <Card
        key={props.id}
        address={props.address}
        name={props.name}
        description={props.description}
      />
    );
  }
  return (
    <div>
      <h1>
        <span>
          <h1 class="arena-title" style={{ fontSize: "26px", color: "black" }}>
            Some of the Arenas
          </h1>
        </span>
      </h1>
      {/*<dl>{data.map(createCard)}</dl>*/}
    </div>
  );
}

export default Arena;
