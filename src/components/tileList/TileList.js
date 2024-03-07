import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <div>
      {data.map((element, index)=>{
        const {name, ...description} = element;
        return (
          <Tile key={index} name={name} description={description} /> 
        )
      } )}
    </div>
  );
};
