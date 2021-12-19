import React from "react";
import NavbarLR from "../Login-register/LRNav"; 
import Login from "../Login-register/Login";
import Register from "../Login-register/Register";
import { Route, Routes } from "react-router-dom";

export default function Login_Register(){
    return(
        <>
        <NavbarLR/>
        <Routes>
            <Route path='/' caseSensitive={true} element={<Login />} />
            <Route path='/register' caseSensitive={true} element={<Register />} />
        </Routes>
        </>
    )
}
