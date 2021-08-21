import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import ContactFooter from "./ContactFooter";

const Footer = (props) => {
  return (
    <>
      <div className={props.contact ? "contactFooter-div " : "CFnone"}>
        <ContactFooter></ContactFooter>
      </div>
      <footer className={props.contact ? "footer" : "footer footer-padding"}>
        <div className=" row mx-auto ">
          <div className="text-group col-xl-2 col-md-4 col-sm-4 col-10 offset-xl-1">
            <h5>MudraCircle</h5>
            <ul>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Career</Link>
              </li>
              <li>
                <Link to="">Team</Link>
              </li>
            </ul>
          </div>

          <div className="text-group col-xl-2 col-md-4 col-sm-4 col-10 ">
            <h5>Resources</h5>
            <ul>
              <li>
                <Link to="">Partnership</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Article</Link>
              </li>
            </ul>
          </div>

          <div className="text-group col-xl-2 col-md-4 col-sm-4 col-10">
            <h5>Support</h5>
            <ul>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">
                  <img
                    src="/images/biz_white.png"
                    className="image-fluid"
                    alt="bizkit-white"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-brand  col-xl-4 col-md-8 offset-1 offset-xl-0 col-11 ">
            <Link to="">
              <img
                src="/images/mc4.png"
                alt="MC-white"
                className="img-fluid"
              ></img>
            </Link>
            <div className="social-links">
              <p>Intelligent Digital Lending Platform</p>
              <IconContext.Provider value={{ size: "1.28em", color: "#fff" }}>
                <ul className="social-icons">
                  <li>
                    <Link target="_blank" to="https://twitter.com/mudracircle">
                      <FaTwitter />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://in.linkedin.com/company/mudracircle"
                    >
                      <FaLinkedin></FaLinkedin>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://www.facebook.com/mudracircle/"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://www.youtube.com/channel/UCDzfp_DO_q8fvZS-OakWr8w"
                    >
                      <FaYoutube></FaYoutube>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://www.instagram.com/mudracircle/"
                    >
                      <FaInstagram></FaInstagram>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://www.pinterest.com/mudracircle/"
                    >
                      <FaPinterest></FaPinterest>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://wa.me/message/QMUYXKLX4PBEA1"
                    >
                      <FaWhatsapp></FaWhatsapp>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://t.me/joinchat/UQAXMqXoMQgbX7JQ">
                      <FaTelegram></FaTelegram>
                    </Link>
                  </li>
                </ul>
              </IconContext.Provider>
            </div>
          </div>
          <p className="text-center copyright">
            2019 MudraCircle
            <Link to=""> Privacy policy </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
