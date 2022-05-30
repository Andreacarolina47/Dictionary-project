import React from "react";

export default function Example(props){
    if(props.example){
    return(
        <div>
        <li><em>{props.example}</em></li>
        </div>
    )
}}