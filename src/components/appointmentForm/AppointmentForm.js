import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  contact,
  setContact,
  appointmentName,
  setName,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Appointment Name: </label>
      <input id="name" type="text" value={appointmentName} onChange={(e)=> setName(e.target.value)} required></input>
      <label for="date" >Date: </label>
      <input id="date" type="date" value={date} onChange={(e)=> setDate(e.target.value)} min={getTodayString()} required></input>
      <label for="time">Time: </label>
      <input id="time" type="time" value={time} onChange={(e)=> setTime(e.target.value)} required></input>
      <ContactPicker contacts={contacts} contact={contact} setContact={setContact} />
      <input type="submit" />
    </form>
  );
};
