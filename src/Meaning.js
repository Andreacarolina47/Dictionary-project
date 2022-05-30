import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";


export default function Meaning(props){
    return(
        <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                <div key={index}>

                    <div className="definition" >{definition.definition}</div>
                        
                    <div className="example"><Example example={definition.example}/></div>
                                  
                </div>         
           ) })}
           <span>
           {props.meaning.synonyms.map(function(synonym, index){
                   return <Synonyms synonyms={synonym}/>;
               })} 
            </span>
           </div>
        
    )
}