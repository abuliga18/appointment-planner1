import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
   if (!isDuplicate) {
    addContact(name, email, phone)
   };

   setName('');
   setEmail('');
   setPhone('')

  };

  useEffect(()=> {
    const isNameDuplicate = contacts.some(contact => contact.name === name ); //returns true
    setIsDuplicate(isNameDuplicate) // isDuplicate = true;
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          setName={setName}
          phone={phone} 
          setPhone={setPhone}
          email={email} 
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts}/>
      </section>
    </div>
  );
};
