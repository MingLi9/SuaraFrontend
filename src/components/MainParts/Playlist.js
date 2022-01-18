import React from "react";
import NavbarPlaylist from "../Playlist/PlaylistNav";
import AllPlaylist from "../Playlist/AllPlaylist";
import PlaylistId from  "../Playlist/PlaylistId";
import CreatePlaylist from  "../Playlist/CreatePlaylist";
import UpdatePlaylist from  "../Playlist/UpdatePlaylist";
import { Route, Routes } from "react-router-dom";

export default function Playlist(){
    return(
        <>
            <NavbarPlaylist/>
            <Routes>
                <Route path='/' caseSensitive={true} element={<AllPlaylist />} />
                <Route path='/*' caseSensitive={true} element={<PlaylistId />} />
                <Route path='/create/' caseSensitive={true} element={<CreatePlaylist />} />
                <Route path='/update/*' caseSensitive={true} element={<UpdatePlaylist />} />
            </Routes>
        </>
    )
}