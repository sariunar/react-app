import React from "react";
import "./portfolioCard.css";
import { Link } from "react-router-dom";

export const PortfolioCard = ({ data }) => {
    const link = data.link.includes('http') ? (
        <a href={data.link}><img src={data.img} alt={data.img}></img></a>
    ) : (
        <Link to={data.link}><img src={data.img} alt={data.img}></img></Link>
    );
    return <div className="portfolioCard">{link}</div>
};

/*return <div className="portfolioCard">
        <a href={data.link}>
            <img src={data.img} alt={data.img}></img>
        </a>
    </div>*/