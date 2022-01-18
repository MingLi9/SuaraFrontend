import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:8080/";

export default function Updateplaylist(){
    const [get, setGet] = React.useState(null);

    const token = useSelector((state) => state.authReducer);
    const header = { headers: {
        'Authorization': token
    }}

    React.useEffect(() => {
        let pathname = window.location.pathname;
        let id = pathname.replace("/album/", "");
        axios.get(baseURL+"album/"+id, header).then((response) => {
            setGet(response.data);
        })
    },[]);

    if (!get) return null;

    return(
        <>
            <table class="table table-dark">
                <th>{get.name}</th>
                <th>{get.ownerName}</th>
                <tbody>
                    { get.songs.map(song => 
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.creatorId}</td>
                        <td>{song.file}</td>
                    </tr>   
                    )}
                </tbody>
            </table>
        </>
    )
}