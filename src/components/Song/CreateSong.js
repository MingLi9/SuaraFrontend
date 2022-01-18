import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:8080/";

export default function CreateSong(){
    const [songtitle, setTitle] = React.useState("");
    const [songfile, setFile] = React.useState("");

    const token = useSelector((state) => state.authReducer);
    const header = { headers: {
        'Authorization': token
    }}

    async function songPost() {
        const song = {"file": songfile,"title": songtitle};
        await axios.post(baseURL+"song", song, header)
        .then(
            prompt("test")
        )
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    }

    return(
        <form onSubmit={songPost}>
            <label>
            Title (Must start with a capital letter):
            <input type="text" value={songtitle} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
            File:
            <input type="text" value={songfile} onChange={(e) => setFile(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}