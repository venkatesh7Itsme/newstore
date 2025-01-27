import React, { useState } from "react";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import { IoClose } from "react-icons/io5"; // Close icon

import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="header-container">
      <header className="header">
       
        <div className="nav-container">

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>

            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <IoClose size={30} /> : <FiMenu size={30} />}
        </div>


       
        <div className="logo-container">
          <div className="logo-line1">FEMME</div>
          <div className="logo-line2">Wardrobe</div>
          <div className="logo-underline"></div>
        </div>

        <div className="icon-container">
          <FaSearch className="icon" />
          <FaShoppingBag className="icon" />
          <span className="bag-count">0</span>
        </div>
      </header>

      <div className="hero-content">
        <h2 className="sub-heading">CASUAL & EVERYDAY</h2>
        <h1>Effortlessly Blend Comfort & Style!</h1>
        <p>
          Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters,
           versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
        </p>
        <button className="view-collection-btn">VIEW COLLECTION</button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
       
        <div className="nav-container">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

       
        <div className="logo-container">
          <div className="logo-line1">FEMME</div>
          <div className="logo-line2">Wardrobe</div>
          <div className="logo-underline"></div>
        </div>

        <div className="icon-container">
          <FaSearch className="icon" />
          <FaShoppingBag className="icon" />
          <span className="bag-count">0</span>
        </div>
      </header>

      <div className="hero-content">
        <h2 className="sub-heading">CASUAL & EVERYDAY</h2>
        <h1>Effortlessly Blend Comfort & Style!</h1>
        <p>
          Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters,
           versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
        </p>
        <button className="view-collection-btn">VIEW COLLECTION</button>
      </div>
    </div>
  );
};

export default Header;


css stylin:
 
/*.hamburger {
  display: none;
  cursor: pointer;
  color: white;
}

.nav-links.active {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}

.nav-links:not(.active) {
  transform: translateY(-100%);
}

/* Responsive design 
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .hamburger {
    display: block;
  }

  .nav-links.active {
    display: flex;
  }
}


/* Responsive styling*/

/* small devices*

@media( max-width:480px){
  .header-container{
    background-size: cover;
    background-position: center;
    height:55vh;
  }
  .header{
    padding:10px 20px;
  }
  .hero-content{
    padding: 8% 5% 2% 5%;
  }
  .nav-list{
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .nav-list li a{
    font-size: 12px;
  }
  .logo-line1{
    font-size: 6px;
  }
  .logo-line2{
    font-size: 18px;
  }
  .hero-content h1{
    font-size: 28px;
    padding: 0 5%;
    line-height: 1.2;

  }

  .hero-content p{
    font-size: 12px;
    padding: 0 5%;
  }

  .view-collection-btn{
     font-size: 10px;
     padding: 8px 20px;
  }
}

/*medium devices*

@media(max-width:768px){
  .header-container{
    height: 60vh;
    background-position: center;

  }
  .header{
    flex-direction: column;
    align-items: center;
    padding: 15px,15px;
  }
  .nav-list{
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .nav-list li a {
    font-size: 13px;
  }
  

  .hero-content h1{
    font-size: 40px;
    padding:0 15%;
    
    
  }
  .hero-content p {
    font-size: 12px;
    padding-top: 55%;
    padding-bottom: 35%;
    padding-left: 0%;
    padding-right: 0%;
    width: 100%;
    flex-wrap: var(--flex-wrap-mobile);
    flex-direction: var(--flex-direction);

  }
  .view-collection-btn{
    font-size: 10px;
    padding: 10px 30px;
  }
}*/


 parallax.css


 .parallax-section {
    position: relative;
    height: 100vh;
    background-image: url('../assets/img43.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: flex-start;
    color: white;
    overflow: hidden;
    padding-top:5%  10%;
  }
  
  .overlay-images {
    position:relative;
    height: auto;
   /* max-width: 35%;*/
   width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;
    margin-bottom: 2rem;
    padding-left: 10%;
   
  }
  
  .image-left img{
    width:300px; 
    height: auto;
   /* border-radius: 10px;*/
   margin-top: -50%;
   margin-left: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
    transition: 0.3s ease,b0x-shadow 0.3s ease;
    
  }
     .image-left img:hover{
      transform: scale(1.05);
      box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.6);
     }
  .parallax-content {
   /* position:absolute;
    bottom: 5%;
    right: 5%;
    text-align: left;*/
    z-index: 2;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    margin-top: -2rem;
    width: 45%;
  }
  
  .parallax-content h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: bold;
  }
  
  .parallax-content p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  .shop-now {
    padding: 12px 20px;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .shop-now:hover {
    background-color: #444;
    color: #fff;
  }

  blazer.css
  .blazers-collection {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f7f7f7;
    color: #333;
    
  }
  
  .blazers-content {
    
    max-width: 50%;
    /*text-align: left;
    padding: 1 rem;
    flex: 0 0 50%;*/
    
  
  .blazers-content h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1rem;
    font-style: italic;
    font-family:' Cormorant Garamond', serif; ;
  }
  
  .blazers-content p {
    font-size:16px;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  .blazers-content h1 {
    color: #333;
    font-size:16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .shop-now-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #333;
    background-color:none;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
  }
  
  .shop-now-btn:hover {
    background-color:#444;
  }
  .blazers-image{
    flex: 0 0 50%;
    max-width: 50%;
    text-align: center;
    padding: 1rem;
  }
  .blazers-image img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .blazers-collection {
      flex-direction: row;
      text-align: center;
      gap:0.5rem;
      
    }
  
    .blazers-content {
      flex-direction: column;
      text-align: center;
  
    }
    .blazers-content p{
      font-size: 14px;
    }
    .blazers-content h2{
      font-size: 28px;
    }
  
    .blazers-image {
     
     flex:1;
      margin-top: 1.5rem;
      max-width: 100%;
      padding: 0.5rem;
    }
    .blazers-image img{
      max-width: 100%;
      height: auto;
      
    }
    .shop-now-btn{
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
  }
  