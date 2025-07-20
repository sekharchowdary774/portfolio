import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">PortFolio Website</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#about'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <section id="home" className='home'>
         <div className='home-left'>
        <h1 className='heading-home'>Hi I'm Kamma Somasekhar</h1>
        <h3 >Software Developer</h3>
        <p>
          I'm a dynamic professional with a knack of blending creativety and art of problem solving.
          Outside of my day-to-day work, I am deeply interested in Frontend,DSA,java ,python and SQL.
        </p>
        <a href="mailto:sekharkamma5@gmail.com"  >
        <button>Hire me</button>
        </a>
        <a href="/sekhar_resume.pdf" download>
        <button>Download Cv</button>
        </a>
        <div className='home-image'>
          <a href='https://leetcode.com/u/sekhar__12/' target="_blank" rel="noopener noreferrer">
        <img src='/images/leetcode.png ' width="80px" height="40px"/>
        </a>
          <a href='https://www.hackerrank.com/profile/sekharkamma5' target="_blank" rel="noopener noreferrer">
        <img src='/images/hacker.png' width="80px" height="40px"/>
        </a>
        <a href="https://www.linkedin.com/in/kamma-somasekhar-24ba272b8/" target="_blank" rel="noopener noreferrer" >
        <img src='/images/linked.png' width="80px" height="40px"/>
        </a>
        </div>
        </div>
        <img className="image" src="/images/hero.jpeg" alt='home' width="500px" height="400px"/>
      </section>
      <div className='info'>
        <div className='header'>
          <h1 id="about" >About me</h1>
          <img  src="/images/hero.jpeg" alt='home' width="300px" height="260px"/>
        
        <p>
          I'm a passionate and self-driven developer with a strong interest in building modern, responsive web applications.
          I enjoy combining elegant front-end design with solid logic and performance.
          I'm also actively sharpening my problem-solving skills through Data Structures and Algorithms in Java and Python.
          <br /><br />
        Currently focused on becoming a Software developer and working on personal projects that solve real problems.
        </p>
        </div> 
      </div>
    </div>
  );
}

export default App;



