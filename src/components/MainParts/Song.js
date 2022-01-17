import React from "react";
import SongNav from '../Song/SongNav';
import AllSongs from '../Song/AllSongs';
import CreatSong from '../Song/CreateSong';
import UpdateSong from "../Song/UpdateSong";
import { Route, Routes } from "react-router-dom";

export default function Song(){
    return(
        <>
            <SongNav/>
            <Routes>
                <Route path='/' caseSensitive={false} element={<AllSongs />} />
                <Route path='/create' caseSensitive={false} element={<CreatSong />} />
                <Route path='/update/*' caseSensitive={false} element={<UpdateSong />} />
            </Routes>
        </>
    )
}