import React from "react";
import data from "./content.json"
import MidHarvest from "./MidHarvest";

const Empower = () => {
    const contents = data.contents
  return (
    <div>
      {contents.map((i) => {
        return <MidHarvest key={i.id} info={{...i}} />
      })}
    </div>
  );
};

export default Empower;
