import React from 'react';
import './App.css'
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import HeaderBackground from './screens/headerBackground/HeaderBackground';
import Technologies from './screens/technologies/Technologies';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Header />
      <HeaderBackground />
      <AboutMe />
      <Technologies />
    </div>
  )
}

export default App;
