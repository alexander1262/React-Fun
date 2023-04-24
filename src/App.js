import React from 'react';
import './App.css'
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import HeaderBackground from './screens/headerBackground/HeaderBackground';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './screens/contactMe/ContactMe';
import Form from './screens/form/Form';

function App() {
  return (
    <div className='App' style={{ backgroundColor: `var(--bg-color)`, color: `var(--text-color)` }}>
        <Navigation />
        <Header />
        <HeaderBackground />
        <AboutMe />
        <Technologies />
        <Portfolio />
        <Form />
        <ContactMe />
    </div>
  )
}

export default App;
