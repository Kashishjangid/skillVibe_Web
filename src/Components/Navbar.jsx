import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/logo.png';
// import '../Styles/styles.css';
import {MdNotificationsActive} from 'react-icons/md';
import {FaUserCircle} from "react-icons/fa";

function Navbar() {
    return <>

        <div className="navbar">
            <div className="logo">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img  id="logo-img" src={Logo} alt="logo-img" />
                </Link>
            </div>
            <ul className="menu">
                <li>
                    <Link className="courses_link" to="/colleges">
                        Colleges
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link className=" categories_link" to="/categories">
                        categories
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link className=" blog_link" to="/blogs">
                        blogs
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link className=" contact_link" to="/contact">
                        Contact us
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link className=" about_link" to="/about">
                        About us
                    </Link>
                </li>
            </ul>
            <div className="right-nav">
                <Link className="notify" to="/">
                    <MdNotificationsActive/>
                </Link>
                <Link className="login" to="/">
                    <FaUserCircle/>
                </Link>
            </div>
        
        </div>
    </>
};

export default Navbar;