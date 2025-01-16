import './App.css';
import Home from './Components/Pages/HomePage';
import COLLABORATIONS from './Components/Pages/COLLABORATIONS';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

function App() {
  const collaborationsRef = useRef(null);
  const [isScrollLocked, setIsScrollLocked] = useState(true); 

  // Scroll to top on page reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This ensures it only runs once on mount

  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isScrollLocked]);

  const scrollToCollaborations = () => {
    const offset = -150; 
    const elementPosition = collaborationsRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsScrollLocked(false); 
    }, 500); 
  };

  return (
    <Router>
      <div className="App">
        <Home scrollToCollaborations={scrollToCollaborations} />
        {/* <div ref={collaborationsRef} className="Service">
          <COLLABORATIONS />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
