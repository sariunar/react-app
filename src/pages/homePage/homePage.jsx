import React from "react";
import { Information } from "../../widgets/information/information";
import { Header } from "../../widgets/header/header";
import { WorkHistory } from "../../widgets/workHistory/workHistory";
import { Portfolio } from "../../widgets/portfolio/portfolio";
import { Contacts } from "../../widgets/contacs/contacts";
import { Footer } from "../../widgets/footer/footer";
import { RightPanel } from "../../widgets/rightPanel/rightPanel";
import { WORK, EDUCATION } from "../../constants/workHistory";
import { useTheme } from "../../processes/contextTheme";

import "./homePage.css";

export const HomePage = () => {
    const { theme } = useTheme();

    return (
        <div className={`container container_${theme}`}>
            <Information />
            <div className="inner">
                <Header />
                <WorkHistory name="education" data={EDUCATION} />
                <WorkHistory name="work" data={WORK} />
                <Portfolio />
                <Contacts />
                <Footer />
            </div>
            <RightPanel />
        </div>
    );
};
