import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name: </label>
      <input id="name" type="text" value={name} required onChange={(e)=> setName(e.target.value)}></input>
      <label for="phone">Phone: </label>
      <input id="phone" type="tel" value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" onChange={(e)=> setPhone(e.target.value)} placeholder="Contact Number (###–###–###)"  required></input>
      <label for="email">Email: </label>
      <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input>
      <input type="submit" value="Submit"/>
    </form>
  );
};

