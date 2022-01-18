import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:8080/";


export default function ListPlaylist(){
    const [get, setGet] = React.useState(null);
    
    const token = useSelector((state) => state.authReducer);

    const header = { headers: {
        'Authorization': token
    }}

    function deleteplaylist(id){
        axios.delete(baseURL+"playlist/"+id, header)
            .then(res => {
                axios.get(baseURL+"playlist", header).then((response) => {
                    setGet(response.data);
                });
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    React.useEffect(() => {
        axios.get(baseURL+"playlist", header).then((response) => {
            setGet(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    },[]);

    if (!get) return null;

    return(
        <>
            <table class="table table-dark">
                <thead clss="thead-dark">
                    <th scope="col">title</th>
                    <th scope="col">ownerName</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </thead>
                <tbody>
                    { get.map(playlist => 
                    <tr>
                        <td>{playlist.name}</td>
                        <td>{playlist.ownerName}</td>
                        <td><Link to={"/playlist/update/"+playlist.id}>Update</Link></td>
                        <td><button onClick={(e)=> deleteplaylist(playlist.id)}>Delete</button></td>
                    </tr>   
                    )}
                </tbody>
            </table>
        </>
    )
}