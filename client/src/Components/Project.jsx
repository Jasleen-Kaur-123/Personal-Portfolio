import React from 'react';
import '../Style/Project.css';
import ngopage from '../Images/ngoproject.png';
import doctorpage from '../Images/doctorproject.png';
import researchpage from '../Images/sraproject.png';     
import tictactoe from '../Images/tttapp.png';
import facebook from '../Images/fbapp.png';
import portfolio from '../Images/portfolioapp.png';
const projects = [
  {
    img: ngopage,
    title: 'NGO Website',
    desc: [
      '🌐 Pages: Home, Donate, Events, Partnership, Contact, Login, Signup.',
      '📄 Built with React: Responsive, user-friendly, highlights causes and events',
    ],
    tech: ['Html', 'Css', 'Javascript', 'React'],
    live: 'https://we-donate-13ngo.netlify.app/home',
    github: 'https://github.com/Jasleen-Kaur-123/NGO-Web-Application',
    disableLive: false
  },
  {
    img: doctorpage,
    title: 'Doctor Website',
    desc: [
        '🏥 Pages: Home, Appointment, Services, About, Contact, Login, Signup.',
        '📄 Built with React: Responsive, user-friendly, streamlines appointments and shares service info.'
    ],
    tech: ['Html', 'Css', 'Javascript', 'React'],
    live: 'https://we-doctor-13doctor.netlify.app/home',
    github: 'https://github.com/Jasleen-Kaur-123/DOCTOR-Web-Application',
    disableLive: false
  },
  {
    img: researchpage,
    title: 'Smart Research Assistant',
    desc: [
      '🔗 Extension: Built with Gemini URL structure.',
      '⚙️ Overview: Summarizes large content.'
    ],
    tech: ['Html', 'Css', 'Javascript', 'Java', 'Springboot', 'Mysql'],
    live: '#',
    github: 'https://github.com/Jasleen-Kaur-123/Research-Assistant-Frontend',
    disableLive: true
  },
  {
    img: tictactoe,
    title: 'Tic Tac Toe App',
    desc: [
      '🎮 Game Logic: A simple Two-player game for Android with win/draw conditions.',
      '📱 UI: Responsive design with splash screen, result dialog, and smooth game flow.'
    ],
    tech: ['Kotlin', 'Xml'],
    live: '#',
    github: 'https://github.com/Jasleen-Kaur-123/TicTacToe',
    disableLive: true
  },
  {
    img: facebook,
    title: 'Facebook lite Clone App',
    desc: [
      '📱 A lightweight UI clone of Facebook Lite with responsive design, including login and signup process.',
      '📄 Focuses on responsive design, smooth navigation, and minimal resource usage.'
    ],
    tech: ['Kotlin', 'Xml'],
    live: '#',
    github: 'https://github.com/Jasleen-Kaur-123/FacebookLite-UI-Kotlin',
    disableLive: true
  },
  {
    img: portfolio,
    title: 'Personal Portfolio',
    desc: [
      '🌐 Pages: Home, About, Skills, Projects, Certificates, Contact.',
      '🔗 It includes a contact form connected to the backend for direct communication.'
    ],
    tech: ['Html', 'Css', 'Javascript', 'React', 'Node', 'Express', 'MySql'],
    live: '#',
    github: 'https://github.com/Jasleen-Kaur-123/Personal-Portfolio',
    disableLive: false
  },
];

const Project = () => {
  return (
    <section className="project-section">
      <h2 className="project-heading">Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-img-wrap">
              <img src={proj.img} alt={proj.title} className="project-img" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{proj.title}</h3>
              <div className="project-techs">
                <span className="project-tech-label">Technologies:</span>
                {proj.tech.map((t, i) => (
                  <span className="project-tech" key={i}>{t}{i < proj.tech.length - 1 ? ', ' : ''}</span>
                ))}
              </div>
              <ul className="project-desc-bullets">
                {proj.desc.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <div className="project-btns">
                <a
                  href={proj.live}
                  className={`project-btn filled${proj.disableLive ? ' disabled' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={proj.disableLive ? -1 : 0}
                  onClick={e => proj.disableLive && e.preventDefault()}
                >View Live Demo</a>
                <a href={proj.github} className="project-btn outline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
