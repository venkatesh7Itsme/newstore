
import React from "react";
import Navbar from "../components/Navbar"; 
import LastSection from "../components/LastSection";
import Footer from "../components/Footer";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="about-header">
        <div className="about-hero">
          <img
            src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-08.jpg"
            alt="About Us Hero"
            className="about-hero-image"
          />
          <h1 className="about-heading">About Us</h1>
        </div>
      </header>

 

      <div className="about-container">
       
        <div className="about-heading-section">
          <h2>From Vision
             To Vogue: The Birth Of FemmeWardrobe</h2>
        </div>

        
        <div className="about-story">
          <h3>OUR STORY</h3>
          <p className="italic-text">
            Our Journey Began With A Simple Yet Powerful Vision - To Redefine The Way Women Experience Fashion.
          </p>
          <p>
            Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection that speaks to the diverse tastes of our cherished customers. From our humble beginnings to the vibrant world we inhabit today, each milestone represents a chapter in our story. Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.
          </p>
        </div>
      </div>

      <div className="quality-assurance-section">
      <h4>QUALITY ASSURANCE</h4>
      <h1>
        We Understand That Fashion Is An Expression Of Identity,
         And We Take Pride In Delivering Products That Embody
           The Highest Standards Of Quality.
      </h1>
      <p>
        Our journey to excellence begins with meticulous sourcing, where we
        carefully select materials that meet our stringent criteria for
        durability, comfort, and style. Every garment is crafted with precision
        in our state-of-the-art manufacturing facilities, ensuring attention to
        detail at every stitch. Our commitment to quality doesn't end there –
        rigorous quality control processes guarantee that each piece meets our
        exacting standards before it finds its way to your wardrobe. Trust in
        FemmeWardrobe for fashion that not only captures attention but
        withstands the test of time.
      </p>
    </div>

    <div className="full-page-image">
      <div className="overlay">
        <div className="content">
          <h6>Customer-Centric Approach</h6>
          <h1>Beyond Fashion: Nurturing A Customer-Centric Experience</h1>
          <p>
            We believe that the essence of our success lies in the satisfaction of our customers. Our commitment to providing an exceptional shopping experience goes beyond trends and styles  – it's about understanding and meeting the unique needs of every individual who chooses FemmeWardrobe. From personalized recommendations to hassle-free returns, we've crafted every aspect of our service with you in mind. Our dedicated customer support team is here to ensure your journey with us is seamless, enjoyable, and exceeds your expectations. Join our community of empowered fashion enthusiasts, where your satisfaction is not just a priority; it's our passion.


          </p>
        </div>
      </div>
    </div>

    <div className="sustainability-page">
  <div className="content-container">
    <h2 className="page-title">SUSTAINABILITY INITIATIVES</h2>
    
    <h1 className="main-title">Conscious Fashion For A Better Tomorrow</h1>
    
    <div className="content-wrapper">
      <div className="subtitle">
        We Recognize The Responsibility We Hold In Shaping A More Sustainable Future For Fashion. Our Commitment To Eco-Friendly Practices And Sustainable Fashion Choices Is At The Core Of What We Do.
      </div>
      
      <div className="main-content">
        <p>From the careful selection of ethically sourced materials to the implementation of environmentally conscious manufacturing processes, every step we take is a stride toward a greener and more sustainable industry.</p>
        <p>We prioritize transparency in our supply chain, partnering with suppliers who share our values of fair labor practices and environmental stewardship.</p>
      </div>
    </div>
  </div>
</div>
<LastSection/>
<Footer/>

    </div>
  );
};

export default AboutUs;