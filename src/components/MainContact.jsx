import React from "react";
import "./mainContact.css";
import contactImage from "../assets/image 12.png";
import { FaArrowRight } from "react-icons/fa6";

const MainContact = () => {
  return (
    <div className="contact_container">
      <h2 className="Contact_heading">Contact Us</h2>
      <div className="Contact_content">
        <form className="contact_form">
          <input type="text" placeholder="Name *" required />
          <input type="tel" placeholder="Phone Number *" required />
          <input type="email" placeholder="Email *" required />
          <input type="text" placeholder="Interested In *" required />
          <textarea placeholder="Message" required></textarea>
        </form>
        <div className="contact_image_container">
          <img src={contactImage} alt="Contactusimage" />
        </div>
      </div>
      <button type="submit">
        Send Email <FaArrowRight />
      </button>
    </div>
  );
};

export default MainContact;
