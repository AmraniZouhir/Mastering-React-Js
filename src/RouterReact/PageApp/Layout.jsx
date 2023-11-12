import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Layout(){
    return <>
    <nav className="navbar-dark bg-primary nav justify-content-center ">
            <li className="nav-item">
                <Link to='/' className="nav-link text-light">Home</Link>
            </li>
            <li className="nav-item">
            <Link to='/blog' className="nav-link text-light">Blog</Link>
            </li>
            <li className="nav-item">
            <Link to='/countact' className="nav-link text-light">Countact</Link>
            </li>
    </nav>
    <div className="container-fluid w-75 mx-auto ">
    <Outlet /> {/*had  Outlet  katji mn react-router-dom hyakatmchi l BrowserRouter okatmchi l function okatjib HTML ocatrandreh */}
    </div>
    </>
}  