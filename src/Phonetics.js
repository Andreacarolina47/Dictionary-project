import React from "react";

export default function Phonetics(props){
    return(
    <div>
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer" >🔊</a>
        {props.phonetics.text}
    </div>);
}