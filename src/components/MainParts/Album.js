import React from "react";
import NavbarAlbum from "../Album/AlbumNav";
import AllAlbum from "../Album/AllAlbum";
import AlbumId from  "../Album/AlbumId";
import CreateAlbum from  "../Album/CreateAlbum";
import { Route, Routes } from "react-router-dom";

export default function Album(){
    return(
        <>
            <NavbarAlbum/>
            <Routes>
                <Route path='/' caseSensitive={true} element={<AllAlbum />} />
                <Route path='/*' caseSensitive={true} element={<AlbumId />} />
                <Route path='/create/' caseSensitive={true} element={<CreateAlbum />} />
            </Routes>
        </>
    )
}