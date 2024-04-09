import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiInfoCircle, BiPhoneCall } from 'react-icons/bi'
 
const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.9798213161116!2d78.48181345962107!3d17.379261960113165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb982c9132aca9%3A0x12a8e178f4dfc626!2sMamatha%20Darshini!5e0!3m2!1sen!2sin!4v1712645402235!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                style={{ border: "0" }} // Convert style string into JavaScript object
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        placeholder="Name"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Email"
                        type="email"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Mobile Phone"
                        type="tel"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with Us.</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5"/>
                        <address className="mb-0">
                          #77, Near Malibu Poin, Los Angeles California, USA
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                          <a href="tel:+91 9876543210">+91 9876543210</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:thetimecircle@gmail.com">
                          thetimecircle@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5"/>
                        <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
