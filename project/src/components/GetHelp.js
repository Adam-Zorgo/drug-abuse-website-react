import React from 'react';
import BannerBackground from '../assets/BannerBackground.jpg'; // Background image
import { FaPhone, FaExclamationCircle, FaLink } from 'react-icons/fa'; // Icons for emphasis

const GetHelp = () => {
  return (
    <div
      className="get-help-background"
      style={{
        backgroundImage: `url(${BannerBackground})`,
        backgroundSize: 'cover', // Ensure the background covers the entire area
        backgroundPosition: 'center', // Center the background
        backgroundAttachment: 'fixed', // Background stays fixed on scroll
        minHeight: '100vh', // Full height of the viewport
        display: 'flex', // Use flexbox to center content
        justifyContent: 'center', // Horizontally center content
        alignItems: 'center', // Vertically center content
      }}
    >
      <div
        className="get-help-content"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent background
          padding: '20px', // Padding around the content
          borderRadius: '8px', // Slightly rounded corners
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
          maxWidth: '800px', // Limit the width for readability
        }}
      >
        <h1 className="get-help-title">Get Help</h1>
        <p className="get-help-intro">
          Recognizing the need for help is a brave step forward...
        </p>

        <section className="hotlines">
          <h2>National Hotlines</h2>
          <ul>
            <li>
              <strong>Substance Abuse and Mental Health Services Administration (SAMHSA)</strong>
              <p>Phone: 1-800-662-HELP (4357)</p>
              <p>Free, confidential, 24/7 service in English and Spanish for individuals and families facing substance abuse disorders.</p>
            </li>
            <li>
              <strong>National Suicide Prevention Lifeline</strong>
              <p>Phone: 1-800-273-TALK (8255)</p>
              <p>Provides 24/7, free, and confidential support for people in distress, as well as prevention and crisis resources for you or your loved ones.</p>
            </li>
          </ul>
        </section>

        <section className="online-resources">
          <h2>Online Resources</h2>
          <ul>
            <li>
              <a href="https://drugfree.org" target="_blank" rel="noopener noreferrer">
                DrugFree.org
              </a>
              <span> - Partnership to End Addiction offers tools, resources, and support for families dealing with addiction.</span>
            </li>
            <li>
              <a href="https://www.na.org" target="_blank" rel="noopener noreferrer">
                Narcotics Anonymous
              </a>
              <span> - A community-based organization for recovering addicts that holds regular meetings in many areas.</span>
            </li>
          </ul>
        </section>

        <section className="emergency-service">
          <FaExclamationCircle className="icon" />
          <strong>Emergency:</strong>
          <p>If this is a medical emergency, please call 911 immediately.</p>
        </section>

        <section className="privacy-notice">
          <p>Your privacy and confidentiality are paramount to us. All interactions and information shared through these resources will be handled with the utmost discretion.</p>
        </section>
      </div>
    </div>
  );
};

export default GetHelp;
