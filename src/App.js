import React from 'react';
import './App.css'
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import HeaderBackground from './screens/headerBackground/HeaderBackground';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './screens/contactMe/ContactMe';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Header />
      <HeaderBackground />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <ContactMe />
    </div>
  )
}

export default App;
