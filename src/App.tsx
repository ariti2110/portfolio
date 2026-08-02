import React from 'react';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import About from './components/About';
import Work from './components/Work';
import Career from './components/Career';
import TechStack from './components/TechStack';
<<<<<<< HEAD
=======
import './styles/ATS-Friendly.css';
>>>>>>> a8b2afd3f5179f875f93e3bdcb5f1f79b2198466
import './App.css';

function App() {
  return (
    <main>
      <About />
      <Work />
      <Career />
      <TechStack />
      {/* ATS-FRIENDLY SECTIONS */}
      
      {/* 1. Contact & Header Section */}
      <Contact />

      {/* 2. About Section */}
      <About />

      {/* 3. Skills Section */}
      <Skills />

      {/* 4. Work/Projects Section */}
      <Work />

      {/* 5. Career/Experience Section */}
      <Career />

      {/* 6. Education Section */}
      <Education />

      {/* 7. Tech Stack Section */}
      <TechStack />

      {/* 8. Certifications & Awards Section */}
      <Certifications />
    </main>
  );
}

export default App;