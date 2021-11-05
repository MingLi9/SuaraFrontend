import React from "react";
import axios from "axios";
const baseURL = "http://localhost:8080/";

function ListSongs(){
    const [get, setGet] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL+"song").then((response) => {
            setGet(response.data);
        });
    }, []);

    if (!get) return null;
    
    return(
        <ul>
            { get.map(song => <li>{song.id}</li>)}
        </ul>
    )
}

export default ListSongs;