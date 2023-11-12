import React from "react";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Layout from "./PageApp/Layout";
import Home from "./PageApp/Home";
import Blog from "./PageApp/Blog";
import Countact from "./PageApp/Countact";
import PageNotFound from "./PageApp/PageNotFound";

export default function AApp(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Layout/>}>
                    <Route index element ={<Home/>}/>
                    <Route path='blog' element ={<Blog/>}/>
                    <Route path='countact' element ={<Countact/>}/>
                    <Route path='*' element ={<PageNotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}