import React from "react";
import "./footer.css";
import FootLogo from "../assets/footerlogo.png";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline, IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaSquarePinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer_container">
      <footer>
        <div className="flex">
          <div>
            <img src={FootLogo} alt="logo" />
          </div>
          <div className="footer_links">
            <ul>
              <li>information</li>
              <li>Main</li>
              <li>Gallery</li>
              <li>Projects</li>
              <li>Certifications</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="footer_contacts">
            <h4>Contacts</h4>
            <div className="span">
              <CiLocationOn />
              <p>
                1234 Sample Street <br /> Austin Texas 78704
              </p>
            </div>
            <div className="span">
              <IoCallOutline />
              <p>512.333.2222</p>
            </div>
            <div className="span">
              <MdOutlineEmail />
              <p>sampleemail@gmail.com</p>
            </div>
          </div>
          <div className="footer_socials">
            <h4>social media</h4>
            <div className="span">
              <FiFacebook />
              <FiTwitter />
              <IoLogoLinkedin />
              <FaSquarePinterest />
            </div>
          </div>
        </div>
      </footer>
      <p>© 2021 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
