import React from "react";

function Copyright(props) {
    let copyRightstyle = {
        fontWeight: "700",
        textAlign:"center",
        position:"fixed",
        bottom:"0px",
        right:"0",
        left:"0",
        color:"white",
        fontSize:"15px",
        marginBottom:"0px",
        paddingBottom:"8px",
        paddingTop:"8px",
        background:"black"
    }
    return(
        <div style={{color:props.mode === "dark" ? "white" : "black"}}>
            <p style={copyRightstyle}>© JENIL SANGANI | All rights reserved</p>
        </div>
    )
}


export default Copyright