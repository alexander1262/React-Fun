import React from 'react';
import './App.css'
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import HeaderBackground from './screens/headerBackground/HeaderBackground';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Header />
      <HeaderBackground />
      <AboutMe />
    </div>
  )
}

export default App;
