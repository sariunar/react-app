import React from "react";
import { Element } from "react-scroll";
import { Form } from "../../features/form/form";
import { ContactsInformation } from "../contactsInformation/contactsInformation";
import { CONTACTS } from "../../constants/contactsInformation";
//import { HookForm } from "../../features/hookForm/hookForm";

import "./contacts.css";

export const Contacts = () => {
    return <Element name="name" className="contacts">
        <Form />
        <ContactsInformation name="contacts" data={CONTACTS} />
    </Element>
}