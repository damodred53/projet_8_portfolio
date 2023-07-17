import React, { useState } from 'react';
import './form.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du formulaire ici
    console.log('Formulaire soumis avec les données :', { name, email, message });
    // Réinitialisation des champs du formulaire
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className='formulaire' onSubmit={handleSubmit}>
      <div className='formulaire_div_contact'>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='formulaire_div_contact'>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='formulaire_div_contact'>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
  };

export default ContactForm;