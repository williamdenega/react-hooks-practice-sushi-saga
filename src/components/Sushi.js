import React,{useState} from "react";

function Sushi({sushi,handleEaten}) {

  const {name, img_url, price} = sushi

  const [eaten, setEaten] = useState(false)

  const handleClick = ()=>{
    if(!eaten) {
      if(handleEaten(price)) setEaten((eaten)=> !eaten)
      

    }else{

      alert("no more shushi here!")
    }

  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
