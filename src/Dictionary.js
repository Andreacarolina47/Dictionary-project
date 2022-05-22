import React, {useState} from "react";

export default function Dictionary(){
    const [word, setWord]= useState(null);

    function search(event){
        event.preventDefault();
        alert(`${word}`)
    }

    function handleWordChange(event){
        event.preventDefault();
        setWord(event.target.value);
    }

    return(<form onSubmit={search}>
        <input type="search" placeholder="Type a word" autoFocus="on" onChange={handleWordChange}/>
        <input type="submit" value="Search🔍" />
    </form>)
}