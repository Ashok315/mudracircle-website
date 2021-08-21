import React from "react";
import { FaBuilding, FaPhone, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const ContactFooter = () => {
  return (
    <>
      <secttion className="contact-footer">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="left col-xl-5 col-md-10 col-sm-10 col-10 ">
              <h4>Contact Us</h4>
              <form>
                <div className="form-container container justify-content-center">
                  <div className="row col-12 mx-auto ">
                    <input type="text" placeholder="Your Name"></input>
                  </div>
                  <div className="row col-12 mx-auto ">
                    <input type="email" placeholder="Your Email"></input>
                  </div>
                  <div className="row input3-4 gap-3">
                    <input
                      type="number"
                      className="col"
                      placeholder="Enter Mobile No"
                    ></input>
                    <input
                      type="text"
                      className="col"
                      placeholder="OTP"
                    ></input>
                  </div>
                  <div className="row col-12 mx-auto ">
                    <input
                      type="text"
                      placeholder="Your Message"
                      id="message"
                    ></input>
                  </div>
                  <div className="submitBtn ">
                    <button type="button" className="btnSubmit">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="right col-xl-4 col-md-10 col-sm-10 col-10 ">
              <div className="contactIcon">
                <IconContext.Provider value={{ size: "1.28em", color: "#fff" }}>
                  <ul>
                    <li>
                      <span>
                        <FaBuilding></FaBuilding>
                      </span>

                      <p>
                        MudraCircle
                        <br /> fTek CS Private Limited, <br /> Mumbai,
                        Maharashtra, <br /> India.
                      </p>
                    </li>
                    <li>
                      <span>
                        <FaPhone />
                      </span>
                      <p>&nbsp; +91 7506127293</p>
                    </li>
                    <li>
                      <span>
                        <FaEnvelope />
                      </span>
                      <p>&nbsp; hello@mudracircle.com</p>
                    </li>
                  </ul>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </secttion>
    </>
  );
};

export default ContactFooter;
