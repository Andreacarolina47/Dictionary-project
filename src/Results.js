import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props){
    const word = props.results.word;
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    if (props.results){
    return(
    <div className="Results">
    <section>
    <h2>{capitalizedWord}</h2>
    {props.results.phonetics.map(function(phonetic, index){
        return(
            <div key={index}>
                <Phonetics phonetics={phonetic}/>
            </div>
        )
    })}
    </section>
    {props.results.meanings.map(function (meaning, index){
        return(
            <section key={index}>
                <Meaning meaning={meaning}/>
            </section>
        )
    })}
    </div>);
    } else{
        return null;
    }
}