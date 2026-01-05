import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import TopicsPage from './pages/TopicsPage';
import WebArchitecture from './components/WebArchitecture';
import ProjectServerDomain from './components/ProjectServerDomain';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0F] transition-colors duration-300 relative">
        {/* Floating Orb - Bottom Right (Dark Mode Only) */}
        <div className="hidden dark:block dark-orb-bottom" />
        
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<TopicsPage />} />
            <Route path="/architecture" element={<WebArchitecture />} />
            <Route path="/deployment" element={<ProjectServerDomain />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
