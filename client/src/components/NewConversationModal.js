import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../context/ContactsProvider";
import { useConversations } from "../context/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedContactIds);
    closeModal();
  }

  function handleCheckBoxChange(contactId) {
    setSelectedContactIds((prevSelId) => {
      if (prevSelId.includes(contactId)) {
        return prevSelId.filter((prevId) => prevId !== contactId);
      } else {
        return [...prevSelId, contactId];
      }
    });
  }

  return (
    <>
      <Modal.Header>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((c) => (
            <Form.Group controlId={c.id} key={c.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(c.id)}
                label={c.name}
                onChange={() => handleCheckBoxChange(c.id)}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type="submit" className="mt-2">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
