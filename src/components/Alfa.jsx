import React from 'react'
import './Alfa.css'
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import img4 from '../assets/img/img4.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import linkedin from '../assets/img/linkedin.png'

function Alfa() {
  return (
    <div className="conatiner">
      <div className='head_txt'>
        <h1 className="alfa_title">
          Meet Our Certified Online Doctors
        </h1>
        <input type="range" min="0" max="10" onchange="document.getElementById('rangeValue').innerHTML = this.value;" list="rangeList"/>
        <p className="alfa_text">
        Our online doctors have an average of 15 years experience and a 98% satisfaction rating, they really set us apart!
        </p>
      </div>
      <div className="card_container">
        <div className="card_block">
          <img className='card_img' src={img1} alt="" />
          <h1 className="card_title">Dr Amanda Linda</h1>
          <p className="card_text">Dentist Specilist</p>
          <div className="social_block">
            <img src={facebook} alt="" className="social_img" />
            <img src={twitter} alt="" className="social_img" />
            <img src={linkedin} alt="" className="social_img" />
          </div>
        </div>

        <div className="card_block">
          <img className='card_img' src={img2} alt="" />
          <h1 className="card_title">Dr. Alisa Rahman</h1>
          <p className="card_text">Carddiologist Specilist</p>
          <div className="social_block">
            <img src={facebook} alt="" className="social_img" />
            <img src={twitter} alt="" className="social_img" />
            <img src={linkedin} alt="" className="social_img" />
          </div>
        </div>

        <div className="card_block">
          <img className='card_img' src={img3} alt="" />
          <h1 className="card_title">Dr. Anthony Fauci</h1>
          <p className="card_text">Neurology Specilist</p>
          <div className="social_block">
            <img src={facebook} alt="" className="social_img" />
            <img src={twitter} alt="" className="social_img" />
            <img src={linkedin} alt="" className="social_img" />
          </div>
        </div>

        <div className="card_block">
          <img className='card_img' src={img4} alt="" />
          <h1 className="card_title">Dr. Khalid Abbed</h1>
          <p className="card_text">Cancer Specilist</p>
          <div className="social_block">
            <img src={facebook} alt="" className="social_img" />
            <img src={twitter} alt="" className="social_img" />
            <img src={linkedin} alt="" className="social_img" />
          </div>
        </div>
      </div>
      <button className="end_button">
        Explore All Doctors
      </button>
    </div>
  )
}

export default Alfa