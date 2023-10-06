import React from "react";
import { Element } from "react-scroll";
import { Form } from "../../features/navigation/form/form";
import { ContactsInformation } from "../../features/navigation/contactsInformation/contactsInformation";
import { CONTACTS } from "../../constants/contactsInformation";

import "./contacts.css";

export const Contacts = () => {
    return <Element name="name" className="contacts">
        <Form />
        <ContactsInformation name="contacts" data={CONTACTS} />
    </Element>
}