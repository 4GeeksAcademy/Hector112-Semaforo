import React from "react";

//include images into your bundle
import { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		 <div>
		     <div className="background"></div>
			  <div className="poste"></div>
		     <div className = "luces">
		         <div onClick={() => color === "rojo" ? setColor("rApagado") : setColor("rojo")} 
				 	  className={"luz " + (color === "rojo" ? "rojo" : "rApagado" )}></div>

		         <div onClick={() => color === "amarillo" ? setColor("aApagado") : setColor("amarillo")} 
				 	  className={"luz " + (color === "amarillo" ? "amarillo" : "aApagado" )}></div>

		         <div onClick={() => color === "verde" ? setColor("vApagado") :setColor("verde")} 
					  className={"luz " + (color === "verde" ? "verde" : "vApagado" )}></div>
		     </div>
		 </div>
	);
};

export default Home;
