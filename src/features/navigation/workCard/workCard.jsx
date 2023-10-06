import React from "react";
import "./workCard.css";

export const WorkCard = ({ data }) => {
    return <div className="workCard">
        <div>
            <p className="siteName">{data.siteName}</p>
            <p className="grade">{data.grade}</p>
            <p className="data">{data.data}</p>
        </div>
        <div>
            <p className="work">{data.work}</p>
            <p className="workHistory">{data.workHistory}</p>
        </div>
    </div>
};