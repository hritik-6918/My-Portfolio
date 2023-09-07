import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0-1 year(Fresher)</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
🚀I'm Hritik Kumar, Aspiring & Passionate Software & Web developer👨‍💻. </p> 
<p>🚀A Tech Enthusiast & Problem solver looking to explore and enhance my skills. </p>
<p>A developer who is passionate about understanding the business requirements and turn those requirements into reusable, maintainable and scalable code. </p>
<p>🚀Currently building & learning a tech product from scratch. </p>
<p>🚀Being an information technology (IT) student of B.tech degree at Techno Main, salt lake, Kolkata, west Bengal, India.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
