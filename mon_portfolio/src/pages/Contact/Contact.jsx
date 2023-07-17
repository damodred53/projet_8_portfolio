import React from "react";
import ContactForm from '../../Components/Form/form.jsx';
import '../../Components/Form/form.css';
import './Contact.css'


const Contact = () => {


    return (
        <div className="contact_formulaire">
            <h2>Un projet ? Une idée ? N'hésitez pas à m'en parler</h2>
            <ContactForm/>
        </div>
    )
}

export default Contact;