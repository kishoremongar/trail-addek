import React, { useState } from "react";
import "./Contact.css";
import ContactImg from "./ContactImg.svg";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onChangeHandler = (fieldName, value) => {
    if (fieldName === "name") {
      setName(value);
    } else if (fieldName === "email") {
      setEmail(value);
    } else if (fieldName === "message") {
      setMessage(value);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() == "") {
      alert("required both field");
    } else {
      alert(name + " " + email);
      setName("");
      setEmail("");
    }
  };
  return (
    <div className="contact-container">
      <div className="form-left">
        <section className="main-hero">
          <img src={ContactImg} alt="Contact" />
        </section>
      </div>
      <section className="form-right">
        <div className="contact-header">
          <span>Contact Us</span>
        </div>
        <form
          onSubmit={(e) => {
            onSubmitHandler(e);
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => {
              onChangeHandler("name", e.target.value);
            }}
            name="userName"
            className="user"
            placeholder="Full Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              onChangeHandler("email", e.target.value);
            }}
            name="userEmail"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              onChangeHandler("message", e.target.value);
            }}
            className="user"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="submitBtn" />
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            {sent && "Message Sent!"}
          </span>
        </form>
      </section>
    </div>
  );
};

export default Contact;
