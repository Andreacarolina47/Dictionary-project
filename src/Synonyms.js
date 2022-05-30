import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
   if (props.synonyms) {
       return(
           <span className="synonyms">
            {props.synonyms}
           </span>
          
       )
   }else {
       return null;
   }
}