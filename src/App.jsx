import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import HeroSection from './components/HeroSection';

function App () {

return (
<LanguageProvider>
    <ThemeProvider>
        <HeroSection/>
    </ThemeProvider>
</LanguageProvider>
) 
}
export default App
