import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseURL = "http://localhost:8080/";



export default function ListSongs(){
    const [get, setGet] = React.useState(null);
    
    function deleteSong(id){
        axios.delete(baseURL+"song/"+id)
            .then(res => {
                axios.get(baseURL+"song").then((response) => {
                    setGet(response.data);
                });
            });
    }
    
    React.useEffect(() => {
        axios.get(baseURL+"song").then((response) => {
            setGet(response.data);
        });
    }, []);

    if (!get) return null;

    return(
        <>
            { get.map(song => 
            <ul>
                <li>song id= {song.id}</li>
                <li>title= {song.title}</li>
                <li>file= {song.file}</li>
                <li>creator= {song.creatorId}</li>
                <Link to={"/song/update/"+song.id}>Update</Link>
                <li><button onClick={(e)=> deleteSong(song.id)}>Test</button></li>
            </ul>)}
        </>
    )
}