import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAccessToken } from "../../actions";

export default function Navbar(){
    const dispatch = useDispatch();
    
    function logout(){
        dispatch(resetAccessToken());
    }

    const token = useSelector((state) => state.authReducer);

    if(token === ""){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/loginregister">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }


    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/song">Song</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/album">Album</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/playlist">Playlist</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/user">User</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={logout} href="/">logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
