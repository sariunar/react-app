import React, { useState } from "react";
import { Element } from "react-scroll";
import { CATEGORIES, PORTFOLIO_DATA } from "../../constants/portfolio";
import { PortfolioTabs } from "../../features/portfolioTabs/portfolioTabs";
import { PortfolioCard } from "../../shared/portfolioCard/portfolioCard";
import { PORTFOLIO_TITLE } from "../../constants/portfolio";
import { Header } from "../../shared/header/header";
import { Paragraph } from "../../shared/paragraph/paragraph";

import "./portfolio.css";

export const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState(PORTFOLIO_DATA);
    const rebderCards = (data) => {
        return data.map((item, index) => <PortfolioCard data={item} key={`${index}_card`} />)
    }
    const handleTabClick = (category) => {
        if (category === CATEGORIES[0]) {
            setPortfolioData(PORTFOLIO_DATA);
        } else {
            const newData = PORTFOLIO_DATA.filter(item => item.category === category);
            setPortfolioData(newData);
        }
    }

    return <Element name="portfolio" className="portfolio">
        <div className="headerInfo">
            <Header header={PORTFOLIO_TITLE.header} />
            <Paragraph aling="center" text={PORTFOLIO_TITLE.title} />
        </div>
        <PortfolioTabs onClick={handleTabClick} />
        <div className="portfolioWrapper">
            {rebderCards(portfolioData)}
        </div>
    </Element>
}