import React from 'react'
import Navbar from "./Navbar"
import Banner from "../assets/Banner.jpg"
import BannerBackground from "../assets/BannerBackground.jpg"

const Home = () => {
  return (
    <div classname="home-container">
        <Navbar />
        <div classname="banner-container">
            <img src={BannerBackground} alt="" />
        </div>
        <div classname="home-text">
            <h1 classname="primary-heading">
                106,699 People Every Year
            </h1>
            <p1 classname="subtext">
                That's the amount of people, in just the United States,
                who have been claimed by drug overdoses. Don't let yourself
                be a statistic.
            </p1>
            <button classname="get-help-button">
                Get Help <FiArrowRight/>
            </button>
        </div>
        <div classname="home-image-container">
            <img src={BannerBackground} alt=""/>
        </div>
    </div>
  )
}

export default Home