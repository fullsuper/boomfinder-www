import React from "react";
import ContactCell from "./ContactCell/index";

const ContactList = ({
  contactList,
  addFavourite,
  onContactSelect,
  onSaveContact,
  onDeleteContact
}: any) => {
  return (
    <div className="contact-main-content">
      {contactList.map((contact: any, index: number) => (
        <ContactCell
          key={index}
          contact={contact}
          onDeleteContact={onDeleteContact}
          onSaveContact={onSaveContact}
          addFavourite={addFavourite}
          onContactSelect={onContactSelect}
        />
      ))}
    </div>
  );
};

export default ContactList;
