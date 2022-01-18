import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:8080/";

export default function Createplaylist(){
    const [playlistName, setName] = React.useState("");
    const [playlistSongs, setSongs] = React.useState();
    const [get, setGet] = React.useState(null);

    const token = useSelector((state) => state.authReducer);
    const header = { headers: {
        'Authorization': token
    }}

    async function playlistPost() {
        const playlist = {"name": playlistName, "songIds": playlistSongs};
        await axios.post(baseURL+"playlist", playlist, header)
        .catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    }

    function controllSongs(event){
        let value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
          );
        setSongs(value);
    }

    React.useEffect(() => {
        axios.get(baseURL+"song", header).then((response) => {
            setGet(response.data);
        });
    },[]);

    if (!get) return null;

    return(
        <form onSubmit={playlistPost}>
            <label>
            Name (Must start with a capital letter):
            <input type="text" value={playlistName} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
            Songs:
            <select onChange={(e) => controllSongs(e)} multiple>
                { get.map(song => 
                    <option value={song.id}>{song.title}</option>
                )}
            </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}