import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    const [word, setWord]= useState(null);
    const[results, setResults]= useState(null);

    function handleDefinition(response){
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleDefinition);
    }

    function handleWordChange(event){
        event.preventDefault();
        setWord(event.target.value);
    }

    return(
    <div>
    <form onSubmit={search}>
        <input type="search" placeholder="Type a word" autoFocus="on" onChange={handleWordChange}/>
        <input type="submit" value="Search🔍" />
    </form>
    <Results results={results}/>
    </div>)
}