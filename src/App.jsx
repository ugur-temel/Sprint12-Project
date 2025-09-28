import React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App () {

return (
<LanguageProvider>
    <ThemeProvider>
        <Header/>
        <HeroSection />
        <Skills/>
        <Profile />
        <Projects />
        <ToastContainer />
        <Footer/>
    </ThemeProvider>
</LanguageProvider>
) 
}
export default App;
