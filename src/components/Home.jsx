import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram} from "react-icons/ai"

export const  Home = () => {
  return (
    <>
    <div className="home" id="Home">
        <main>
            <h1>TechXpert</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2"  >
       <img src={vg} alt="Graphics" />
       <div>
        <p>
        Our tech solution website offers a wide array of services, including software development, mobile app creation, web design, and cybersecurity. Trust us to provide innovative solutions tailored to your business needs.
        </p>
       </div>
    </div>


    <div className="home3" id='about'>
    <div>
        <h1>Who we are?</h1>
        <p>Our tech solution website offers a comprehensive range of services to address your technological needs. From software development and mobile app creation to web design and cybersecurity, our expert team is equipped with the skills to deliver innovative and efficient solutions. We strive to provide top-notch customer service, ensuring your satisfaction at every step of the process. Trust us to enhance your business with cutting-edge technology.</p>
    </div>
    </div>

    <div className="home4" id='brands'>
      <div>
  <h1>Brands</h1>
  <article>
    <div style={{animationDelay:"0.3s"}}> 
    <AiFillGoogleCircle/>
    <p>Google</p>
    </div>
    <div style={{animationDelay:"0.5s"}}> 
    <AiFillAmazonCircle/>
    <p>Amazon</p>
    </div>
    <div style={{animationDelay:"0.7s"}}> 
    <AiFillYoutube/>
    <p>YouTube</p>
    </div>
    <div style={{animationDelay:"1s"}}> 
    <AiFillInstagram/>
    <p>Instagram</p>
    </div>
  </article>
      </div>
    </div>
    </>
  )
}
