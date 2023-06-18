import React from 'react';
import IMG1 from '../../assets/lofi.png';
import IMG2 from '../../assets/youtube.png';
import IMG3 from '../../assets/expense.png';
import IMG4 from '../../assets/code-editor.png';
import IMG5 from '../../assets/meditation.png';
import IMG6 from '../../assets/invoice.jpeg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Lofi-Music-App',
      img: IMG1,
      description:
        'Built with TypeScript and React, Lofi offers a seamless and intuitive user experience, with a clean and simple design that is easy to navigate.',
      technologies: 'React | Typescript | Tailwind CSS',
      link: 'https://hritik-6918-lofi-app.netlify.app/',
      github: 'https://github.com/hritik-6918/Lofi-Music-App',
    },
    {
      id: 2,
      title: 'RealTime-Code-Editor',
      img: IMG4,
      description:
        'a web-based code editor that allows multiple users to edit the same codebase simultaneously in realtime.',
      technologies: 'Tailwind CSS | Javascipt | HTML',
      link: 'https://hritik-6918-realtime-code-editor.netlify.app/',
      github: 'https://github.com/hritik-6918/realtime-code-editor',
    },
    {
      id: 3,
      title: 'Youtube-Clone',
      img: IMG2,
      description: 'React Youtube Clone project implemented & made with Material UI.',
      technologies: 'React | Material UI | CSS',
      link: 'https://youtube-clone-hritik-6918.vercel.app/',
      github: 'https://github.com/hritik-6918/youtube-clone-React-and-Material-UI',
    },
    {
      id: 4,
      title: 'Expense Tracker',
      img: IMG3,
      description:
        'An expense tracker website allows to track the expenses based on spending budget and expenses.',
      technologies: 'React | CSS | Bootstrap',
      link: 'https://hritik-6918-expense-tracker.vercel.app/',
      github: 'https://github.com/hritik-6918/Expense-Tracker-React',
    },
    {
      id: 5,
      title: 'Meditation App',
      img: IMG5,
      description:
        'Introducing a web application to calm your mind, body, spirit and coding-fingers.',
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://github.com/hritik-6918/Meditation-app',
      github: 'https://github.com/hritik-6918/Meditation-app',
    },
    {
      id: 6,
      title: 'Invoice Generator',
      img: IMG6,
      description:
        'An Invoice Generator project built with React and TailwindCSS & add items, quantity, prices, tax rates and discounts.',
      technologies: 'React | Tailwind CSS',
      link: 'https://invoice-generator-app-hritik-6918.vercel.app/',
      github: 'https://github.com/hritik-6918/invoice-generator-app',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
