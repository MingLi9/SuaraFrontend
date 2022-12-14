import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:8080/";

export default function UpdateSong(){
    const [songid, setId] = React.useState();
    const [songtitle, setTitle] = React.useState("");
    const [songfile, setFile] = React.useState("");
    
    const token = useSelector((state) => state.authReducer);
    const header = { headers: {
        'Authorization': token
    }}
    
    function songPut() {
        const song = {"file": songfile,"title": songtitle};
        axios.put(baseURL+"song/"+songid, song, header)
        .then(res => {
            let pathname = window.location.pathname;
            let id = pathname.replace("/song/update/", "");
            axios.get(baseURL+"song/"+id, header).then((response) => {
                setId(response.data.id);
                setTitle(response.data.title);
                setFile(response.data.file);
            });
        })
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    }

    React.useEffect(() => {
        let pathname = window.location.pathname;
        let id = pathname.replace("/song/update/", "");
        axios.get(baseURL+"song/"+id, header).then((response) => {
            setId(response.data.id);
            setTitle(response.data.title);
            setFile(response.data.file);
        });
    },[]);
    
    return(
        <form onSubmit={songPut}>
            <table class="table table-dark">
                <thead clss="thead-dark">
                    <th scope="col">Title</th>
                    <th scope="col">File</th>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" value={songtitle} onChange={(e) => setTitle(e.target.value)} /></td>
                        <td><input type="text" value={songfile} onChange={(e) => setFile(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" value="Submit" />
        </form>
    )
}