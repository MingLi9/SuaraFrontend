import React from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/";

export default function Register(){

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordRepeat, setPasswordRepeat] = React.useState("");

    async function register() {
        if(password !== passwordRepeat){
            alert("Password and repeat password are not the same!");
            return;
        }

        const registerobj = {'username': username, 'password': password};
        
        await axios.post(baseURL+"user", registerobj)
        .then(function (response){
            if(response != null){
                alert("Register successfull");
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
            alert("There was an error!" + error);
        });
    }

    return(
        <>
            <form>
                <label>
                Username:
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                Password:
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                Repeat password:
                <input type="text" onChange={(e) => setPasswordRepeat(e.target.value)} />
                </label>
                <input type="button" value="Register" onClick={register} />
            </form>
        </>
    )
}