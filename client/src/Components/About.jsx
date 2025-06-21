import React, { useState } from 'react';
import '../Style/About.css';
import aboutimage from '../Images/aboutimage.png';

const aboutBullets = [
  "I am an MCA student (2025 pass-out), passionate and dedicated to building modern, responsive web applications. I enjoy solving real-world problems through code and design.",
  "With a strong foundation in full-stack development, I focus on delivering high-quality, user-centric solutions that align with business goals. I value clean code and scalable architecture.",
  "I thrive in collaborative environments, continuously explore new technologies, and am committed to growing as a developer. Eager to take on new challenges, I aim to contribute meaningfully to impactful tech projects."
];

const experiences = [
  {
    role: 'Housy Point',
    duration: '2 months',
    period: 'Dec 2024 - Feb 2025',
    bullets: [
      'Developed UI components using HTML, CSS, JavaScript and Bootstrap.',
      'Enhanced UX by modifying layout and improving responsiveness.'
    ]
  },
  {
    role: 'IBM Skills',
    duration: '3 months',
    period: 'Jun 2024 - Aug 2024',
    bullets: [
      'Built responsive pages in a team and have better hand-on experience on GitHub for version control.',
      'Gained experience in UI development for enhanced user experience.'
    ]
  }
];

const About = () => {
  const [expIdx, setExpIdx] = useState(0);
  const exp = experiences[expIdx];

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-left">
          <h1 className="about-title">About Me</h1>
          <ul className="about-bullets">
            {aboutBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="about-experience">
            <div className="exp-carousel-controls">
              <button className="exp-arrow" onClick={() => setExpIdx((expIdx + experiences.length - 1) % experiences.length)}>&lt;</button>
              <h2 className="exp-title">Work Experience</h2>
              <button className="exp-arrow" onClick={() => setExpIdx((expIdx + 1) % experiences.length)}>&gt;</button>
            </div>
            <div className="exp-item">
              <div className="exp-row">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-duration">{exp.duration} <span className="exp-period">({exp.period})</span></div>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-image-bg">
            <img src={aboutimage} alt="Jasleen Kaur" className="about-image" />
            <div className="about-floating-card">
              <span className="about-card-dot"></span>
              <span className="about-card-name">Jasleen Kaur</span>
              <span className="about-card-role">Software Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
