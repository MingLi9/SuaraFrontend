import React from "react";
import axios from "axios";
const baseURL = "http://localhost:8080/";

function CreatSong(){
    const [post, setPost] = React.useState(null);
    const [title, setTitle] = React.useState("");
    const [creatorId, setCreatorId] = React.useState(0);
    const [file, setFile] = React.useState("");

    React.useEffect(() => {
        axios.get(baseURL+"song").then((response) => {
        setPost(response.data);
        });
    }, []);

    if (!post) return null;
    
    function createPost() {
        axios.post(baseURL+"song", {
          })
          .then((response) => {
            setPost(response.data);
          });
    }
    
    return(
        <form onSubmit={createPost}>
            <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
            CreatorId:
            <input type="text" value={creatorId} onChange={(e) => setCreatorId(e.target.value)} />
            </label>
            <label>
            File:
            <input type="text" value={file} onChange={(e) => setFile(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreatSong;