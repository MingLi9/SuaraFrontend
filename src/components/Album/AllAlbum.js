import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:8080/";


export default function Listalbum(){
    const [get, setGet] = React.useState(null);
    
    const token = useSelector((state) => state.authReducer);

    const header = { headers: {
        'Authorization': token
    }}

    function deletealbum(id){
        axios.delete(baseURL+"album/"+id, header)
            .then(res => {
                axios.get(baseURL+"album", header).then((response) => {
                    setGet(response.data);
                });
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    React.useEffect(() => {
        axios.get(baseURL+"album", header).then((response) => {
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
                    { get.map(album => 
                    <tr>
                        <td>{album.name}</td>
                        <td>{album.ownerName}</td>
                        <td><Link to={"/album/"+album.id}>View</Link></td>
                        <td><button onClick={(e)=> deletealbum(album.id)}>Delete</button></td>
                    </tr>   
                    )}
                </tbody>
            </table>
        </>
    )
}