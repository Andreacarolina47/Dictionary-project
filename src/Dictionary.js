import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary(){
    const [word, setWord]= useState("Summer");
    const[results, setResults]= useState(null);
    const [loaded, setLoaded]= useState(false);

    function handleDefinition(response){
        setResults(response.data[0]);
    }
     
    function handleSubmit(event){
        setLoaded(true);
        event.preventDefault();
        search();
    }

    function search(){
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleDefinition);
    }

    function handleWordChange(event){
        event.preventDefault();
        setWord(event.target.value);
    }
    if (loaded){
    return(
    <div className="Dictionary">
    <section>    
    <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a word" autoFocus="on" onChange={handleWordChange} className="searchBar"/>
        <input type="submit" value="Search🔍" className="searchButton" />
    </form>
    </section>
    <Results results={results}/>
    </div>)
}else{
    setLoaded(true);
    search();
    return null;
}}