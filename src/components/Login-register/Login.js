import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { resetAccessToken, setAccessToken } from "../../actions";

const qs = require('qs');
const baseURL = "http://localhost:8080/";

export default function Login(){
    const dispatch = useDispatch();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    async function login() {
        const loginobj = {'username': username, 'password': password};
        
        await axios.post(baseURL+"login", qs.stringify(loginobj))
        .then(function (response){
            if(response != null){
                dispatch(setAccessToken(response.data.access_token));
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    function logout(){
        dispatch(resetAccessToken());
    }

    return(
        <>
            <form>
                <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                Password:
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="button" value="Login" onClick={login} />
            </form>
            <form onSubmit={logout}>
                <input type="submit" value="Logout" />
            </form>
        </>
    )
}