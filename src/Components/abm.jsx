import {useState} from "react";
import Registro from "./formulario";
import Lista from "./Lista";

export default function Abm(){
    const [formVisible,setFormVisible]=useState(false);

function mostrarForm(){
    setFormVisible(true);
}


function ocultarForm(){
    setFormVisible(false);
}


    return(
        <div className="container">
            <h2>Abm de tareas</h2>
            <Lista/>
            <div>
                <button className="btn btn-primary" onClick={()=>setFormVisible(true)}>Agregar</button>
            </div>
            <hr/>
            {formVisible?<Registro visible={formVisible}/>:null}
        </div>
    )
}