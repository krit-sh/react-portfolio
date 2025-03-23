import { useState, useEffect } from 'react';
import '../App.css';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <div 
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin="0"
      aria-valuemax="100"
    />
  );
}

export default ScrollProgress; 