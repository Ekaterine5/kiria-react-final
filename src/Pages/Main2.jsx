import React from "react";
import '../index.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Signin from "../Components/Signin";
import Crousel from "../Components/Crousel";
import { coursescard } from "../Alldata";

function Main2()
{
    return(
        <>
        <Header/>
        <Crousel/>
        <Signin/>
        
        <Footer/>
       </>
    )
}
export default Main2;