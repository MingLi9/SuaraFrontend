import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:8080/";

export default function User(){
    const [id, setId] = React.useState();
    const [roleName, setRoleName] = React.useState();
    
    const token = useSelector((state) => state.authReducer);

    const header = { headers: {
        'Authorization': token
    }}

    const params = {
        id: id,
        roleName: roleName
    };

    function updateUser(){
        axios.put(baseURL+"user/role?id="+id+"&roleName="+roleName, header);
    }

    return(
        <>
            <form onSubmit={updateUser}>
                <label>
                Userid:
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <select onChange={(e) => setRoleName(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Creator">Creator</option>
                    <option value="User">User</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}