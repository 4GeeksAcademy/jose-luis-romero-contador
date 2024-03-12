import React from "react";
import "./contador.css"


const Contador = () =>{
    let cont  = 0
	let lanzador=setInterval(() =>{
			cont++;
            document.getElementById("contador").innerHTML = cont;4
            if(cont==10){
                clearInterval(lanzador)
            }
		},1000);

    return(
        <div class="contenedor">
            <div className="contSpan">
                <span><i class="bi bi-clock"></i></span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span id="contador"></span>
            </div>
        </div>
    )
	
}
export default Contador;