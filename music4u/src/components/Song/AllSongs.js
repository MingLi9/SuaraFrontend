import React from "react";
import axios from "axios";
const baseURL = "http://localhost:8080/";

function ListSongs(){
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL+"song").then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null;
    
    
    
    
    return(
        <ul>
            { post.map(song => <li>{song.id}</li>)}
        </ul>
    )
}

export default ListSongs;