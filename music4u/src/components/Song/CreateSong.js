import React from "react";
import axios from "axios";
const baseURL = "http://localhost:8080/";

export default function CreateSong(){
    const [songtitle, setTitle] = React.useState("");
    const [songcreatorId, setCreatorId] = React.useState(1);
    const [songfile, setFile] = React.useState("");

    function songPost() {
        const song = {"creatorId": songcreatorId,"file": songfile,"title": songtitle};
        axios.post(baseURL+"song", song)
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    }

    return(
        <form onSubmit={songPost}>
            <label>
            Title (Must start with a capital lette):
            <input type="text" value={songtitle} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
            CreatorId:
            <input type="text" value={songcreatorId} onChange={(e) => setCreatorId(e.target.value)} />
            </label>
            <label>
            File:
            <input type="text" value={songfile} onChange={(e) => setFile(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}