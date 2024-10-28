import React from "react";
import { Image } from "react-bootstrap";
import "./Icons.css";

function Icons(){
    return(
        <div className="icons-container">
<div className="iconc-content">

    <h2 className="title-service" style={{color:"#E8EFCF", top:"128px", left:"300px"}}>Nuestros Servicios</h2>

    <div className="circle-background">
        <Image src="/images/salve-el-planeta.svg" alt= "Icon" className="icon-image" style={{color:"#FFF5E4", width: "60px",top: "18px", left:"20px"}}/>
    </div>

    <div className="circle-backgroundcero">
        <Image src="/images/aguas-residuales.svg" alt= "Icon" className="icon-image" style={{color:"#FFF5E4", width: "60px",top: "15px", left:"20px"}}/>
    </div>
    <div className="circle-backgrounduno">
        <Image src="/images/laboratorio.svg" alt= "Icon" className="icon-image" style={{color:"#FFF5E4", width: "60px",top: "15px", left:"19px"}}/>
    </div>
    <div className="circle-backgroundos">
        <Image src="/images/estacion-total.svg" alt= "Icon" className="icon-image" style={{color:"#FFF5E4", width: "60px",top: "17px", left:"21px"}}/>
    </div>
    <div className="circle-backgroundtres">
        <Image src="/images/sistema.svg" alt= "Icon" className="icon-image" style={{color:"#FFF5E4", width: "60px",top: "17px", left:"20px"}}/>
    </div>
    <div className="circle-backgroundcuatro">
        <Image src="/images/la-contaminacion-del-agua.svg" alt= "Icon" className="icon-image"  style={{ fill:"#FFF5E4", width: "85px",top: "6px", left:"8px"}}/>
    </div>
</div>

</div>
    )
}
export default Icons