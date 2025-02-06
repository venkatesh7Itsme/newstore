import React from "react";
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/ContactUs.css";
import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";
import LastSecction from "../components/LastSection";
import Footer from "../components/Footer";
 
 
const ContactUs = () => {
  return (
   < div>
      {/* Navbar */}
      <Navbar />
 
    <div className="contact-us-container">
      <div className="overlay">
        <h1 className="contact-title">Contact Us</h1>
      </div>
    </div>
   
    <div className="contact-container">
      <h4 className="contact-heading">GET IN TOUCH</h4>
      <p className="contact-text">
        We Value The Connection With Our Community And Are Here To Assist In Any
        Way We Can. Feel Free To Reach Out Through The Following Channels:
      </p>
      </div>
 
      <div className="contact-page">
      {/* Contact Form */}
      <div className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea placeholder="Message" className="contact-textarea"></textarea>
        <button className="contact-button">SEND</button>
      </div>
 
      {/* Contact Info */}
      <div className="contact-info">
        <p><strong>PHONE</strong></p>
        <p><em>(303) 555-0105</em></p>
 
        <p><strong>EMAIL</strong></p>
        <p>mail@example.com</p>
 
        <p><strong>ADDRESS</strong></p>
        <p><em>2972 Westheimer Rd, Santa Ana, Illinois 85486</em></p>
 
        <p><strong>FOLLOW US:</strong></p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <div className="map-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509406!2d144.95373531550404!3d-37.81627974202157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df9df2f3d%3A0x5e1c1348e41e62b5!2sFashion%20Store!5e0!3m2!1sen!2sus!4v1649788743658!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
 
 
 
 
      </div>
    </div>
    <FeaturesSection/>
    <LastSecction/>
    <Footer/>
      </div>
  );
};
 
export default ContactUs