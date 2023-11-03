import React from "react";
import "./skillsCard.css";

export const SkillsCard = ({ data }) => {
    return <div className="skilCard">
        <div>
            <p className="skillName">{data.lang}</p>
            <p className="skillLevel">{data.level}</p>
        </div>
    </div>
};