import { useEffect } from "react";
import React, {useState} from "react";

function Title() {
    const [headerTitle, setHeaderTitle] = useState([]);
    useEffect(() =>{
        fetch("aboutme.json").then(response => response.json()).then(data => setHeaderTitle(data))
    },[]);
    return (
        <>
        <h1>{headerTitle.name}</h1>
        <h2>{headerTitle.title}</h2>
        <h3>{headerTitle.email} | {headerTitle.github}</h3>
        <p>{headerTitle.description}</p>
        </>
    );
}

export default Title;