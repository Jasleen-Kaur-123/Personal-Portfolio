import React, { useState, useEffect } from 'react';
import '../Style/Skill.css';

const techIcons = {
  html: require('../Images/html.png'),
  css: require('../Images/css.png'),
  js: require('../Images/javascript.png'),
  java: require('../Images/java.png'),
  spring: require('../Images/spring.png'),
  springboot: require('../Images/spring.png'),
  mysql: require('../Images/mysql.png'),
  vscode: require('../Images/vscode.png'),
  react: require('../Images/react.png'),
  kotlin: require('../Images/kotlin.png'),
  xml: require('../Images/xml.png'),
  c: require('../Images/c.png'),
  eclipse: require('../Images/eclipse.png'),
  github: require('../Images/github.png'),
  postman: require('../Images/postman.png'),
  tailwindcss: require('../Images/tailwindcss.png'),
};


const roleCards = [
  {
    title: 'Full Stack Java Developer',
    techs: ['html', 'css', 'js', 'java', 'springboot', 'mysql', 'eclipse'],
    bullets: [
      'Building scalable and dynamic web applications using Java, Spring Boot, and MySQL.',
      'Experienced in HTML, CSS, JavaScript, Java, Eclipse.'
    ]
  },
  {
    title: 'Frontend Developer',
    techs: ['html', 'css', 'js', 'react', 'vscode'],
    bullets: [
      'Designing responsive and visually appealing UIs using React and modern frontend technologies.',
      'Skilled in HTML, CSS, JavaScript, React, VS Code.'
    ]
  },
  {
    title: 'Android Developer',
    techs: ['kotlin', 'xml', 'eclipse'],
    bullets: [
      'Developing user-friendly mobile apps using Kotlin, XML, and Android development tools.',
      'Proficient in Kotlin, XML, Eclipse, Android Studio.'
    ]
  },
  {
    title: 'Programmer',
    techs: ['c', 'java'],
    bullets: [
      'Solving DSA problems including arrays, recursion, stack, queue, and backtracking.',
      'Strong in Java and C programming fundamentals.'
    ]
  }
];

const getCardSlides = () => {
  const slides = [];
  for (let i = 0; i < roleCards.length; i += 2) {
    slides.push(roleCards.slice(i, i + 2));
  }
  return slides;
};

const cardSlides = getCardSlides();

const Skill = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cardSlides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="skill-section">
      <h2 className="skill-heading">Skills</h2>
      <div className="herocard-carousel">
        {cardSlides.map((slide, idx) => (
          <div
            className={`herocard-slide${idx === current ? ' active' : ''}`}
            key={idx}
            style={{ display: idx === current ? 'flex' : 'none' }}
          >
            {slide.map((card, i) => (
              <div className="herocard" key={i}>
                <div className="herocard-title">{card.title}</div>
                <div className="herocard-techs">
                  {card.techs.map((tech, j) =>
                    techIcons[tech] ? (
                      <img src={techIcons[tech]} alt={tech} className="herocard-icon" key={j} />
                    ) : (
                      <span className="herocard-techtext" key={j}>{tech.toUpperCase()}</span>
                    )
                  )}
                </div>
                <ul className="herocard-bullets">
                  {card.bullets.map((b, k) => <li key={k}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <div className="herocard-dots">
          {cardSlides.map((_, idx) => (
            <span
              key={idx}
              className={`herocard-dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
