import React, { useState } from 'react';
import '../Style/Certificate.css';

const certificates = [
  {
    title:'Code Avengers, National Student Convention',
    duration: 'Issued Apr 2025',
    link: 'https://drive.google.com/file/d/1bL-kQ0x05OKekcEfmpEfAttFqsrP6Al4/view?usp=sharing',
  },
  {
    title: 'Dark Coding Avengers, IEEE Education Week',
    duration: 'Issued Apr 2025',
    link: 'https://drive.google.com/file/d/1bdtqfq8xQQG58iES4DR-cq7bP4H0XqQg/view?usp=sharing',
  },
  {
    title: 'Tech Fest – Sankalan',
    duration: 'Issued Apr 2025',
    link: 'https://drive.google.com/file/d/1bUM0590MgsLGwA-T_MQnmNGZUvqcof3D/view?usp=sharing',
  },
  {
    title: 'The Complete Jenkins DevOps CI/CD Pipeline Bootcamp, Udemy',
    duration: 'Issued Apr 2025',
    link: 'https://drive.google.com/file/d/1bP8AX0OuChMttlEdMZNW1SLL4XK_LcNL/view?usp=sharing',
  },
  {
    title: 'CSRBOX : Web Development Internship Plan',
    duration: 'Issued Jul 2024',
    link: 'https://drive.google.com/file/d/17HjH-JXChCvjrFJV0Puqctbot7SccbBZ/view?usp=sharing',
  },
  {
    title: 'C, C++, Core Java and Android with Kotlin',
    duration: 'Issued Jun 2022',
    link: 'https://drive.google.com/file/d/1bNDa7M7jPJQybSM9d3kRyeoInCquAhFm/view?usp=sharing',
  },
];

const Certificate = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleCertificates = showMore ? certificates : certificates.slice(0, 4);
  const toggleShowMore = () => setShowMore(v => !v);

  return (
    <section className="certificate-section">
      <h2 className="certificate-heading">Certificates & Competitions</h2>
      <div className="certificate-grid">
        {visibleCertificates.map((cert, idx) => (
          <div className="certificate-card" key={idx}>
            <h3 className="certificate-title">{cert.title}</h3>
            <div className="certificate-duration">Duration: <span>{cert.duration}</span></div>
            <a href={cert.link} className="certificate-btn" target="_blank" rel="noopener noreferrer">Show Credentials</a>
          </div>
        ))}
      </div>
      <div className='certificate-viewmore'>
        <button className="certificate-viewmore-btn" onClick={toggleShowMore}>
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>
    </section>
  );
};

export default Certificate;
