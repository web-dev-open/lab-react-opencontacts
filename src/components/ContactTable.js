import React from "react";
import ContactRow from "./ContactRow";

function ContactTable({ contacts, onDelete }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
          <th style={{ borderBottom: "2px solid black", padding: "10px" }}>
            Picture
          </th>
          <th style={{ borderBottom: "2px solid black", padding: "10px" }}>
            Name
          </th>
          <th style={{ borderBottom: "2px solid black", padding: "10px" }}>
            Popularity
          </th>
          <th style={{ borderBottom: "2px solid black", padding: "10px" }}>
            Won an Oscar
          </th>
          <th style={{ borderBottom: "2px solid black", padding: "10px" }}>
            Won an Emmy
          </th>
          <th style={{ borderBottom: "2px solid black", padding: "10px" }}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
