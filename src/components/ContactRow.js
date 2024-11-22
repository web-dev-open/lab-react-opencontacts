import React from "react";

function ContactRow({ contact, onDelete }) {
  return (
    <tr>
      <td>
        <img
          src={contact.pictureUrl}
          alt={contact.name}
          style={{ height: "100px", borderRadius: "5px" }}
        />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td>{contact.wonOscar ? "🏆" : ""}</td>
      <td>{contact.wonEmmy ? "🏆" : ""}</td>
      <td>
        <button
          onClick={() => onDelete(contact.id)}
          style={{
            padding: "5px 10px",
            fontSize: "14px",
            cursor: "pointer",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactRow;
