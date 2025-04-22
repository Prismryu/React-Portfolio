import React from 'react';
import profileImg from '../assets/Guy.jpg'; // Adjust path as needed

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <p>
          Hi! I am a Guy named Guy. A future full-stack web developer passionate about bring visions to life
          within impactful applications. I enjoy combining creativity with
          logic to craft seamless user experiences. Whether I'm working with frontend
          frameworks or backend APIs, I'm always excited to learn and grow.
        </p>
      </div>
    </div>
  );
}

export default About;