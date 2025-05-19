import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

function Skills() {
  const [activeTab, setActiveTab] = useState("skills");

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
      delay: 0,
      offset: 0,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <h1 className={`skills-heading ${activeTab === "skills" ? "active" : "inactive"}`}>
        Skills
      </h1>
      <div className="toggle-buttons">
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={activeTab === "tools" ? "active" : ""}
          onClick={() => setActiveTab("tools")}
        >
          Tools
        </button>
      </div>
      <section className="skills-section-container" id="skills">
        <div
          className={`skills-section ${activeTab === "skills" ? "active" : ""}`}
          id="skillsSection"
        >
          <div className="tech-stack-wrapper">
            {/* Skills List */}
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/htmllogo.png" />
              <div className="tooltip">HTML</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/csslogo.png" />
              <div className="tooltip">CSS</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/js.png" />
              <div className="tooltip">Javascript</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/reactlogo.png" />
              <div className="tooltip">ReactJS</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/tailwind-css.svg" />
              <div className="tooltip">Tailwaind CSS</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/bootstrap.png" />
              <div className="tooltip">Bootstrap</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/clogo.png" />
              <div className="tooltip">C</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/cpplogo.png" />
              <div className="tooltip">C++</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/javalogo.png" />
              <div className="tooltip">Java</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="HTML" src="/Images/Logo/bash.svg" />
              <div className="tooltip">Bash Scripting</div>
            </div>
          </div>
        </div>

        <div
          className={`skills-section ${activeTab === "tools" ? "active" : ""}`}
          id="toolsSection"
        >
          <div className="tech-stack-wrapper">
            {/* Tools List */}
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="GitHub" src="/Images/Logo/github-mark.png" />
              <div className="tooltip">GitHub</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up">
              <img alt="GitHub" src="/Images/Logo/linux.png" />
              <div className="tooltip">Linux</div>
            </div>
            <div className="tech-stack-box" data-aos="fade-up" id="padd">
              <img alt="Git" src="/Images/Logo/git.svg" />
              <div className="tooltip">Git</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
