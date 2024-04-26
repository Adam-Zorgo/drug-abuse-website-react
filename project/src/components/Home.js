import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Banner from '../assets/Banner.jpg';
import BannerBackground from '../assets/BannerBackground.jpg';

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetHelpClick = () => {
    navigate('/gethelp'); // Navigate to the /gethelp route
  };

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="background-banner-container">
          <img src={BannerBackground} alt="Background Banner" className="background-image" />
          <div className="overlay-content">
            <img src={Banner} alt="Overlay Banner" className="overlay-banner" />
            <div className="text-content">
              <h1 className="primary-heading">106,699 People Every Year</h1>
              <p className="subtext">
                That's the number of people in the United States who have been claimed by drug overdoses.
                Don't let yourself become a statistic.
              </p>
              <button className="get-help-button" onClick={handleGetHelpClick}>
                Get Help
              </button> {/* Navigate to /gethelp on click */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
