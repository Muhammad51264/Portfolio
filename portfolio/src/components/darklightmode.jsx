import React, { useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const Darklightmode = () => {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const setColors = (darkMode) => {
    const body = document.querySelector('body');
    const elements = document.querySelectorAll('h1, h2, h5, h6, p');
    const card =document.querySelectorAll(".myCard");
    const allText = document.querySelectorAll(".DM__Text");
    const nav =document.querySelector("nav");
    let navText=document.querySelectorAll(".nav-link");
    let icon=document.querySelector(".icon");
    if (!darkMode) {
      body.style.color = 'black';
      icon.style.color = 'black';
      body.style.background =
        'linear-gradient(180deg, rgba(164,184,227,1) 0%, rgba(255,255,255,1) 23%, rgba(164,184,227,1) 87%)';
        console.log(card)
      elements.forEach((element) => {
        element.style.color = 'black';
      });
      card.forEach((element) => {
        element.style.backgroundColor = '#ffffff';
      });

      allText.forEach((element) => {
        element.style.color = 'black';
      })
      navText.forEach((element) => {
        element.style.color = 'black';
      })
      nav.style.background = 'linear-gradient(90deg, rgba(164,184,227,0.01) 0%, rgba(255,255,255,1) 50%, rgba(164,184,227,1) 100%)';
    } else {
      body.style.color = 'white';
      icon.style.color = '#e6edf3';

      body.style.background =
        'linear-gradient(180deg, rgba(32, 55, 112, 1) 0%, rgba(6, 10, 42, 1) 32%, rgba(6, 10, 42, 1) 63%, rgba(14, 33, 79, 1) 100%)';
      elements.forEach((element) => {
        element.style.color = 'white';
      });
      card.forEach((element) => {
        element.style.backgroundColor = '#1d2430';
      });
      allText.forEach((element) => {
        element.style.color = 'white';
      })
      navText.forEach((element) => {
        element.style.color = 'white';
      })
      nav.style.background = 'linear-gradient(90deg, rgba(32,55,112,1) 0%, rgba(6,10,42,1) 3%, rgba(6,10,42,1) 97%, rgba(14,33,79,1) 100%)';
    }
  };

  useEffect(() => {
    setColors(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <>
      <DarkModeSwitch
        sunColor=" #FDB813"
        moonColor='#ffffff '
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={35}
      />

    </>
  );
};

export default Darklightmode;
