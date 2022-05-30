import React from "react";
import "./Phonetics.css";

export default function Phonetics(props){
    if(props.phonetics.audio){
    return(
    <div>
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">🔊</a>
        {props.phonetics.text}
    </div>);
    }else {
        return null;
    }}