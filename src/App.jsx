import './App.css';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';
import Projects from './components/Projects.jsx';
import { useEffect, useRef, useState } from 'react';

function App() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark mode by default
    document.body.classList.add('dark-mode');
    // Set initial theme color for mobile browsers
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1a1a1a');
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    // Update theme color for mobile browsers
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isDarkMode ? '#ffffff' : '#1a1a1a');
  };

  class Particle {
    constructor(x, y, size, color, speed) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.speed = speed;
      this.directionX = Math.random() * 2 - 1;
      this.directionY = Math.random() * 2 - 1;
    }

    update(width, height) {
      this.x += this.directionX * this.speed;
      this.y += this.directionY * this.speed;

      if (this.x > width || this.x < 0) {
        this.directionX *= -1;
      }
      if (this.y > height || this.y < 0) {
        this.directionY *= -1;
      }
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numParticles = 100;
    const color = isDarkMode ? '#ffffff' : '#000000';

    // Initialize particles
    particles.current = [];
    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speed = Math.random() * 0.5 + 1;
      particles.current.push(new Particle(x, y, size, color, speed));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDarkMode]);

  return (
    <>
      <button 
        className="dark-mode-toggle" 
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <canvas ref={canvasRef} id="background"></canvas>
      <div className="index-slide">
        <section className="content" id="home">
          <div className="getintouch-heading">
            <article data-aos="fade-up" data-aos-delay="0" id="hello-friend">
              <p className="jello">N</p>
              <p className="jello">a</p>
              <p className="jello">m</p>
              <p className="jello">a</p>
              <p className="jello">s</p>
              <p className="jello">t</p>
              <p className="jello">e</p>
              <p className="jello">(</p>
              <p className="jello">)</p>
              <p className="jello">;</p>
            </article>
          </div>
          <div className="typewriter">
            <h1>I'm Ritesh.</h1>
          </div>
        </section>
      </div>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
