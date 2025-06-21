import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Certificate from './Components/Certificate';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skill"><Skill /></section>
        <section id="project"><Project /></section>
        <section id="certificate"><Certificate /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
};

export default App;
