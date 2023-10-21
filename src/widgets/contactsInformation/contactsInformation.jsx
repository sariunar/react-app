import React from "react";
import { Element } from "react-scroll";
//import { Header } from "../../shared/header/header";
import { Paragraph } from "../../shared/paragraph/paragraph";
import "./contactsInformation.css";
import { ContactsCard } from "../../features/contactsCard/contactsCard";

export const ContactsInformation = ({ name, data }) => {
    const contactsInformation__info = data.history.map((contact, i) => <ContactsCard data={contact} key={`contact_${i}`} />)
    const titleInfo = data.title.map((contact, i) => <ContactsCard data={contact} key={`contact_${i}`} />)
    return (
        <div className="contactsInformation">
            <h2 className="contactsInformation__title">Contact information</h2>
            <Element name={name} className="contactsInformation__text">
                <Paragraph text={titleInfo} className="titleInfo" />
                <div className="contactsInformation__info">{contactsInformation__info} </div>
            </Element>
        </div>
    );
};

/*
export const ContactsInformation = ({ name, data }) => {
    const mainInfo = data.history.map((work, i) => <WorkCard data={work} key={`work_${i}`} />)

    return <Element name={name} className="work">
        <div className="headerInfo">
            <Header header={data.header} />
            <Paragraph aling="center" text={data.title} />
        </div>
        <div className="mainInfo">{mainInfo} </div>
    </Element>
}*/