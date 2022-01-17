import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:8080/";


export default function ListSongs(){
    const [get, setGet] = React.useState(null);
    
    const token = useSelector((state) => state.authReducer);

    const header = { headers: {
        'Authorization': token
    }}

    function deleteSong(id){
        axios.delete(baseURL+"song/"+id, header)
            .then(res => {
                axios.get(baseURL+"song", header).then((response) => {
                    setGet(response.data);
                });
            });
    }

    React.useEffect(() => {
        axios.get(baseURL+"song", header).then((response) => {
            setGet(response.data);
        });
    },[]);

    if (!get) return null;

    return(
        <>
            <table class="table table-dark">
                <thead clss="thead-dark">
                    <th scope="col">song id</th>
                    <th scope="col">title</th>
                    <th scope="col">file</th>
                    <th scope="col">creator</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </thead>
                <tbody>
                    { get.map(song => 
                    <tr>
                        <td>{song.id}</td>
                        <td>{song.title}</td>
                        <td>{song.file}</td>
                        <td>{song.creatorId}</td>
                        <td><Link to={"/song/update/"+song.id}>Update</Link></td>
                        <td><button onClick={(e)=> deleteSong(song.id)}>Test</button></td>
                    </tr>   
                    )}
                </tbody>
            </table>
        </>
    )
}