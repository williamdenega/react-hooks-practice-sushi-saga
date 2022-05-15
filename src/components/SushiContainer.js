import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiList, moreSushi,handleEaten}) {
  

  return (
    <div className="belt">
      {sushiList.map((sushi)=> <Sushi key={sushi.id} sushi={sushi} handleEaten={handleEaten} />)}
      <MoreButton showNext={moreSushi} />
    </div>
  );
}

export default SushiContainer;
