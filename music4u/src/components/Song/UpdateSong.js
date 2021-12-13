import React from "react";
import axios from "axios";
const baseURL = "http://localhost:8080/";

export default function UpdateSong(){
    const [songid, setId] = React.useState();
    const [songtitle, setTitle] = React.useState("");
    const [songcreatorId, setCreatorId] = React.useState(1);
    const [songfile, setFile] = React.useState("");
    
    function songPut() {
        const song = {"id": songid,"creatorId": songcreatorId,"file": songfile,"title": songtitle};
        axios.put(baseURL+"song", song)
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    }

    React.useEffect(() => {
        let pathname = window.location.pathname;
        let id = pathname.replace("/song/update/", "");
        axios.get(baseURL+"song/"+id).then((response) => {
            setId(response.data.id);
            setTitle(response.data.title);
            setCreatorId(response.data.creatorId);
            setFile(response.data.file);
        });
    }, []);
    
    return(
        <form onSubmit={songPut}>
            <label>
            Song id:
            <input type="number" value={songid} onChange={(e) => setId(e.target.value)} />
            </label>
            <label>
            Title (Must start with a capital lette):
            <input type="text" value={songtitle} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
            CreatorId:
            <input type="number" value={songcreatorId} onChange={(e) => setCreatorId(e.target.value)} />
            </label>
            <label>
            File:
            <input type="text" value={songfile} onChange={(e) => setFile(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}