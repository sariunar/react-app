import React from "react";
import { Element } from "react-scroll";
import { Header } from "../../shared/header/header";
import { SkillsCard } from "../../features/skillsCard/skillsCard";

import "./skills.css";

export const Skills = ({ name, data }) => {
    const skillInfo = data.skill.map((skill, i) => <SkillsCard data={skill} key={`work_${i}`} />)

    return <Element name={name} className="skill">
        <Header className='skill__name' header={data.header} />
        <div className="skillInfo">{skillInfo} </div>
    </Element>
}