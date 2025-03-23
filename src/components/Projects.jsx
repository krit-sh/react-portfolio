import { useState, useRef, useEffect } from "react";
import "../App.css";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const carouselRef = useRef(null);
  const slides = [
    {
      img: "/Images/ProjectImages/1.png",
      desc: `Bash Scripts Repository: "In this repository, you will find different folders or branches containing various Bash scripts that I have written."`,
      github: "https://github.com/krit-sh/Bash-Script",
      live: null,
    },
    {
      img: "/Images/ProjectImages/2.png",
      desc: `Portfolio Website: "A personal portfolio showcasing my projects, technical skills, and achievements."`,
      github: "https://github.com/krit-sh/Portfolio",
      live: "https://krit-sh.github.io/Portfolio/",
    },
    {
      img: "/Images/ProjectImages/3.png",
      desc: `VHelpNGOs: "We make sure that the donations you make will be used in the right way and will help to support a cause."`,
      github: "https://github.com/krit-sh/VHelpNGOs",
      live: "https://krit-sh.github.io/VHelpNGOs/",
    },
    {
      img: "/Images/ProjectImages/4.png",
      desc: `Todo List: "A streamlined task management system to organize daily goals and projects."`,
      github: "https://github.com/krit-sh/ToDo-List",
      live: "https://krit-sh.github.io/ToDo-List/",
    },
    {
      img: "/Images/ProjectImages/5.png",
      desc: `WatchNote is a browser extension designed to enhance your YouTube watching experience by saving, managing, and taking notes on specific timestamps.`,
      github: "https://github.com/krit-sh/WatchNote.git",
      live: null,
    },
  ];

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const moveSlide = (step) => {
    const totalSlides = slides.length;
    setCurrentSlide((prev) => (prev + step + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const slideWidth = carousel?.querySelector(".carousel-slide")?.clientWidth || 0;
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }, [currentSlide]);

  return (
    <>
      <h1 className={`projects-heading ${isHovered ? "active" : "inactive"}`}>
        Projects
      </h1>
      <div 
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel" ref={carouselRef}>
          {slides.map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <div className="image-container">
                {!loadedImages[index] && (
                  <div className="image-skeleton"></div>
                )}
                <img 
                  alt={`Project ${index + 1}`} 
                  src={slide.img}
                  onLoad={() => handleImageLoad(index)}
                  className={loadedImages[index] ? 'loaded' : ''}
                />
              </div>
              <p>{slide.desc}</p>
              <div className="icon-links">
                <a href={slide.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                {slide.live && (
                  <a href={slide.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => moveSlide(-1)}>
          ❮
        </button>
        <button className="next" onClick={() => moveSlide(1)}>
          ❯
        </button>
      </div>
    </>
  );
}

export default Projects;
