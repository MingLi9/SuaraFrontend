import React from "react";

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/song">Song</a></li>
                <li><a href="/album">Album</a></li>
                <li><a href="/playlist">Playlist</a></li>
                <li><a href="/user">User</a></li>
                <li><a href="/login-register">Login</a></li>
                <li><a href="/logout">logout</a></li>
            </ul>
        </nav>
    )
}
