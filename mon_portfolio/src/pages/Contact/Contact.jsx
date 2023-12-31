import React from "react";
import ContactForm from '../../Components/Form/form.jsx';
import '../../Components/Form/form.css';
import './Contact.css'


const Contact = () => {


    return (
        <div className="page_contact">
            <div className="contact_formulaire">
                <h2 className="title_contact">Un projet ? Une idée ? N'hésitez pas à m'en parler</h2>
                <ContactForm/>
                <div>
                    <blockquote className="quote_contact">"Le contact, c'est l'appréciation des différences."</blockquote>
                </div>
            </div>
        </div>
    )
}

export default Contact;