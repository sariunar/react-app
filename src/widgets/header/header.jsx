import React from "react";
import { Element } from "react-scroll";
import photo from "./images/photo.png";

import "./header.css";

export const Header = () => {
    return <Element name="home" className="header">
        <div>
            <h2 className="header__title">I’m Rayan Adlrdard</h2>
            <h2 className="header__title"><p>Front-end </p> Developer </h2>
            <p className="header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
            <button className="header__button">HIRE ME</button>
        </div>
        <img src={photo} alt="photo" />
    </Element>
}