import React from "react";
import { Skills } from "../skills/skills";
import { LANGUAGES, SKILLS, EXTRASKILLS, DATA } from "../../constants/skills";
import { SocialLink } from "../../features/socialLink/socialLink";

import "./information.css";

export const Information = () => {
    return <div className="information">
        <div className="information__firstBlock">
            <p className="information__name">Rayan Adlardard</p>
            <p className="information__position">Font-end Developer</p>
        </div>
        <div>
            <SocialLink />
        </div>
        <div className="line"></div>
        <div className="information__data"><Skills name="data" data={DATA} /></div>
        <div className="line"></div>
        <Skills name="lang" data={LANGUAGES} />
        <div className="line"></div>
        <Skills name="skills" data={SKILLS} />
        <div className="line"></div>
        <Skills name="extraSkills" data={EXTRASKILLS} />
    </div>
}