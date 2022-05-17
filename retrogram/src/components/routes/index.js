import React from 'react';
import { Routes, Route } from "react-router-dom";
import {
    Login, Signup, Home
} from '../index';
import { Header } from '../../header';

export function NavRoutes() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    )
}