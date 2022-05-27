import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";


export default function Meaning(props){
    return(
        <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                <div key={index}>
                    <p>
                        {definition.definition}
                        <br />
                        <Example example={definition.example}/>
                    </p>                
                </div>    
           ) })}
          <Synonyms synonyms={props.meaning.synonyms}/>   
        </div>
        
    )
}