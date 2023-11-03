import React from "react";
import "./socialLink.css";

import { DribbbleIcon } from "../socialLink/icon/Icons-dribbble";
import { FacebookIcon } from "../socialLink/icon/Icons-facebook";
import { TwitterIcon } from "../socialLink/icon/Icons-twitter";
import { InstagramIcon } from "../socialLink/icon/Icons-instagram";
import { LinkedIcon } from "../socialLink/icon/Icons-linkedin";
import { YoutubeIcon } from "../socialLink/icon/Icons-Youtube";

export const SocialLink = () => {
    return (
        <nav className="socialLink">
            <a href="https://www.instagram.com/"><InstagramIcon /></a>
            <a href="https://www.facebook.com/"><FacebookIcon /></a>
            <a href="https://twitter.com/"><TwitterIcon /></a>
            <a href="https://ru.linkedin.com/"><LinkedIcon /></a>
            <a href="https://www.youtube.com/"><YoutubeIcon /></a>
            <a href="https://dribbble.com/"><DribbbleIcon /></a>
        </nav>
    );
}