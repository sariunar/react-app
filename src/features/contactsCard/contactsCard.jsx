import React from "react";
import "./contactsCard.css";

export const ContactsCard = ({ data }) => {
    return <div className="contactsCard">
        <div>
            <p className="country">{data.country}</p>
            <p className="city">{data.city}</p>
            <p className="streat">{data.streat}</p>
        </div>
        <div>
            <p className="email">{data.email}</p>
            <p className="skype">{data.skype}</p>
            <p className="telegram">{data.telegram}</p>
        </div>
        <div>
            <p className="support">{data.support}</p>
            <p className="office">{data.office}</p>
            <p className="personal">{data.personal}</p>
        </div>

    </div>
};