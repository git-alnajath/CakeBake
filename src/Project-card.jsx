import React, { useState } from "react";
import './Project.css'

export default function Project(val){

    return(
       <div className="photos">
            <img src={val.picname} onClick={() =>val.number(val)}/>
            <h2>{val.nam}</h2>
            <h3>{val.rs}</h3>
       </div>
    )
};