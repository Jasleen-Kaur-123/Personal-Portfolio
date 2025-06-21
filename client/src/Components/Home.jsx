import React, { useState, useEffect } from 'react';
import '../Style/Home.css';
import homeimage from '../Images/homeimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const titles = [
  'Full Stack Developer',
  'Web Developer',
  'Frontend Developer',
  'Programmer'
];

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [fade, setFade] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 1800);
    const changeTitle = setTimeout(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
      setFade(true);
    }, 2200);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(changeTitle);
    };
  }, [currentTitle]);


  const handleResumeDownload = () => {
    // Background email (optional)
    axios.post('http://localhost:5000/resume-download').catch(console.error);
  
    // Fast PDF download
    const link = document.createElement('a');
    link.href = '/Jasleen_Kaur_Resume.pdf'; // ✅ Assuming it's in /public folder
    link.setAttribute('download', 'Jasleen_Kaur_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  

  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <div className="home-left">
          <div className="home-title">
            <h1>Hi,</h1>
            <h1>
              I'm a {' '} <br/>
              <span className={`home-name animated-title${fade ? ' fade-in' : ' fade-out'}`}>
                {titles[currentTitle]}
              </span>
            </h1>
          </div>
          <p className="home-desc">
          A 22-year-old from Delhi, passionate about Coding, Web Designing, and exploring New Technologies. Adaptive, Creative, and always eager to learn and grow in Dynamic, fast-paced Tech Environments.
          </p>
          <div className="home-socials">
            <span>Find Me on</span>
            <Link to="https://www.linkedin.com/in/jasleen-kaur-3aa573305/" aria-label="LinkedIn"> 
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
            <Link to="https://github.com/Jasleen-Kaur-123" aria-label="Github">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            <Link to="#" aria-label='Email'>
            <span
              className="home-email-icon"
              style={{ cursor: 'pointer' }}
              onClick={() => setModalOpen(true)}
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: 8, color: '#1976d2'}} />
            </span>
            </Link>
          </div>
          <div className="home-buttons">
            <a href="#contact" className="home-btn hire-btn">Hire me</a>
            <button className="home-btn resume-btn" onClick={handleResumeDownload}>
              Resume
            </button>
          </div>
        </div>
        <div className="home-right">
          <div className="home-image-bg">
            <img src={homeimage} alt="Jasleen Kaur" className="home-image" />
          </div>
        </div>
      </div>
      <div className="home-circles">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
      </div>
      {modalOpen && (
        <div className="home-modal-overlay">
          <div className="home-modal">
            <button className="home-modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            <div className="home-modal-content home-modal-centered">
              <div className="home-modal-icon">
                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#1976d2', marginBottom: 12 }} />
              </div>
              <div className="home-modal-title">Contact Email</div>
              <div className="home-modal-email">jkaurdhillon51@gmail.com</div>
              <div className="home-modal-text">Pushing limits to create something new.</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
