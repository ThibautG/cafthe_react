import React from 'react';
/* npm install react-router-dom */
/* Le but de Layout est de créer un template où on va mettre les éléments qui s'affichent tout le temps*/
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout(props) {
    return (
        <div>
            {/*<Header />*/}
            <Navbar />
            {/* Outlet : là où s'affichent les pages enfants*/}
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;