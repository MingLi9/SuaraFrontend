import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken } from "../../actions";

const baseURL = "http://localhost:8080/";

export default function Login(){
    const token = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function login() {
        dispatch(setAccessToken("DDG"));
        // const headers = {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   };
        // const loginobj = {"username": username,"password": password};
        // axios.post(
        //     baseURL+"login", 
        //     loginobj,
        //     headers)
        // .then(function (response){
        //     console.log(response);
        //     dispatch(setAccessToken());
        // })
        // .catch(error => {
        //     console.error('There was an error!', error);
        // });
    }

    return(
        <>
            <form>
                <label>
                Username:{token}
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                Password:
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" onClick={login}/>
            </form>
        </>
    )
}