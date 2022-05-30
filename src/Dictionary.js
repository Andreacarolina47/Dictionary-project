import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';
import Photos from "./Photos";

export default function Dictionary(){
    const [word, setWord]= useState("Summer");
    const[results, setResults]= useState(null);
    const [loaded, setLoaded]= useState(false);
    const [photos, setPhotos]= useState(null);

    function handleDefinition(response){
        setResults(response.data[0]);
    }

    function handlePictures(response){
       setPhotos(response.data.photos);
    }
     
    function handleSubmit(event){
        setLoaded(true);
        event.preventDefault();
        search();
    }

    function search(){
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleDefinition);

        let pexelsApiKey = "563492ad6f91700001000001bd3a70b0aa0d4be2a570b02e20cb3889";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers : headers}).then(handlePictures);
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
    <Photos  photos={photos}/>
    </div>)
}else{
    setLoaded(true);
    search();
    return null;
}}