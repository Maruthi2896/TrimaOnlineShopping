import React, { useState } from "react";
import "./contact.css";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const [users, setUsers] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUsers({ ...users, [name]: value });
  };
  //https://trima-onlineshopping-default-rtdb.firebaseio.com/
  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = users;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "apllication/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };
    const res = await fetch(
      "https://trima-onlineshopping-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Your message sent, Maruthi K J will reply you soon..");
    } else {
      alert("An Error occured");
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contant">
          <h2> # Contact Us</h2>
          <div className="form">
            <form method="POST">
              <input
                type="text"
                name="Name"
                value={isAuthenticated ? user.name : users.Name}
                placeholder="Enter Your Full Name"
                required
                className="name"
                autoComplete="off"
                onChange={data}
              />
              <input
                type="text"
                name="Email"
                value={isAuthenticated ? user.email : users.Email}
                placeholder="Enter Your Email"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="text"
                name="Subject"
                value={users.Subject}
                placeholder="Enter Subject"
                required
                autoComplete="off"
                onChange={data}
              />
              <textarea
                name="Message"
                value={users.Message}
                placeholder="Your message"
                required
                autoComplete="off"
                onChange={data}
              ></textarea>
              {isAuthenticated ? (
                <button type="submit" onClick={senddata}>
                  {" "}
                  Send
                </button>
              ) : (
                <button type="submit" onClick={() => loginWithRedirect()}>
                  {" "}
                  Login To send
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
