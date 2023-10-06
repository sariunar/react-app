import React from "react";
import { Link } from "react-scroll";
import "./navigation.css";
//import HomeIcon from "./images/home.svg";
//import ContactsIcon from "./images/contact.svg"
//import PortfolioIcon from "./images/portfolio.svg";
//import CVIcon from "./images/cv.svg";
import { ContactsIcon } from "./icons/contactIcon";
import { CVIcon } from "./icons/cvicon";
import { PortfolioIcon } from "./icons/portfolioIcon";
import { HomeIcon } from "./icons/homeIcon";

export const Navigation = () => {
    return (
        <nav className="navigation">
            <Link className="item" activeClass="active" to="home" smooth={true} duration={500}><HomeIcon /></Link>
            <Link className="item" activeClass="active" to="education" smooth={true} duration={500}><CVIcon /></Link>
            <Link className="item" activeClass="active" to="portfolio" smooth={true} duration={500}><PortfolioIcon /></Link>
            <Link className="item" activeClass="active" to="contacts" smooth={true} duration={500}><ContactsIcon /></Link>
        </nav>
    );
}