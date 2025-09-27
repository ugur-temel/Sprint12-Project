import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';

function App () {

return (
<LanguageProvider>
    <ThemeProvider>
        <Header/>
        <HeroSection />
        <Skills/>
        <Profile />
    </ThemeProvider>
</LanguageProvider>
) 
}
export default App
