import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hey!👋Connections, I'm</h3>
        <h1>H r i t i k   K u m a r</h1>
        <h2 className="text-light">SOFTWARE ENGINEER | WEB DEVELOPER</h2>
        <CTA />
        <a href="#contact" className="scroll__down">
          Let's Intro
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
