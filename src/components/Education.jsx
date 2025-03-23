import { useEffect, useState } from "react";
import "../App.css";

function Education() {
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    const educationButton = document.getElementById("educationButton");
    const certificatesButton = document.getElementById("certificatesButton");

    const handleEducationClick = () => {
      document.getElementById("educationTimeline").classList.add("active");
      document
        .getElementById("certificatesTimeline")
        .classList.remove("active");
      educationButton.classList.add("active");
      certificatesButton.classList.remove("active");
      setActiveTab("education");
    };

    const handleCertificatesClick = () => {
      document.getElementById("certificatesTimeline").classList.add("active");
      document.getElementById("educationTimeline").classList.remove("active");
      certificatesButton.classList.add("active");
      educationButton.classList.remove("active");
      setActiveTab("certificates");
    };

    educationButton.addEventListener("click", handleEducationClick);
    certificatesButton.addEventListener("click", handleCertificatesClick);

    const timelineItems = document.querySelectorAll(
      ".timeline__item-header button"
    );

    const handleItemClick = (e) => {
      const button = e.currentTarget;
      const body = document.getElementById(
        button.getAttribute("aria-controls")
      );
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !expanded);
      body.classList.toggle("timeline__item-body--expanded");
      body.setAttribute("aria-hidden", expanded);
    };

    timelineItems.forEach((item) => {
      item.addEventListener("click", handleItemClick);
    });

    return () => {
      educationButton.removeEventListener("click", handleEducationClick);
      certificatesButton.removeEventListener("click", handleCertificatesClick);
      timelineItems.forEach((item) => {
        item.removeEventListener("click", handleItemClick);
      });
    };
  }, []);

  return (
    <>
      <h1 className={`timeline-heading ${activeTab === "education" ? "active" : "inactive"}`}>
        Qualifications
      </h1>
      <svg display="none">
        <symbol id="arrow">
          <polyline
            fill="none"
            points="7 10,12 15,17 10"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polyline>
        </symbol>
      </svg>
      <div className="toggle-buttons">
        <button className="active" id="educationButton">
          Education
        </button>
        <button id="certificatesButton">Certificates</button>
      </div>
      <div className="timeline active" id="educationTimeline">
        <div className="timeline__item">
          <div className="timeline__item-header">
            <button
              aria-controls="item1-ctrld"
              aria-expanded="false"
              aria-haspopup="true"
              aria-labelledby="item1-name"
              className="timeline__arrow"
              data-item="1"
              id="item1"
              type="button"
            >
              <svg
                className="timeline__arrow-icon"
                height="24px"
                viewbox="0 0 24 24"
                width="24px"
              >
                <use href="#arrow"></use>
              </svg>
            </button>
            <span className="timeline__dot"> </span>
            <span className="timeline__meta" id="item1-name">
              <time className="timeline__date" datetime="1970-01-01">
                {" "}
                2025{" "}
              </time>
              <br />
              <strong className="timeline__title">
                B.Tech in Computer Science and Engineering
              </strong>
            </span>
          </div>
          <div
            aria-hidden="true"
            aria-labelledby="item1"
            className="timeline__item-body"
            id="item1-ctrld"
            role="region"
          >
            <div className="timeline__item-body-content">
              <p className="timeline__item-p">
                CMR COLLEGE OF ENGINEERING &amp; TECHNOLOGY
              </p>
              <p className="timeline__item-p">CGPA: 7.77/10</p>
            </div>
          </div>
        </div>
        <div className="timeline__item">
          <div className="timeline__item-header">
            <button
              aria-controls="item2-ctrld"
              aria-expanded="false"
              aria-haspopup="true"
              aria-labelledby="item2-name"
              className="timeline__arrow"
              data-item="2"
              id="item2"
              type="button"
            >
              <svg
                className="timeline__arrow-icon"
                height="24px"
                viewbox="0 0 24 24"
                width="24px"
              >
                <use href="#arrow"></use>
              </svg>
            </button>
            <span className="timeline__dot"> </span>
            <span className="timeline__meta" id="item2-name">
              <time className="timeline__date" datetime="1973-10-17">
                {" "}
                2021{" "}
              </time>
              <br />
              <strong className="timeline__title"> Intermediate </strong>
            </span>
          </div>
          <div
            aria-hidden="true"
            aria-labelledby="item2"
            className="timeline__item-body"
            id="item2-ctrld"
            role="region"
          >
            <div className="timeline__item-body-content">
              <p className="timeline__item-p">Narayana Junior College</p>
              <p className="timeline__item-p">Percentage: 78.7%</p>
            </div>
          </div>
        </div>
        <div className="timeline__item">
          <div className="timeline__item-header">
            <button
              aria-controls="item3-ctrld"
              aria-expanded="false"
              aria-haspopup="true"
              aria-labelledby="item3-name"
              className="timeline__arrow"
              data-item="3"
              id="item3"
              type="button"
            >
              <svg
                className="timeline__arrow-icon"
                height="24px"
                viewbox="0 0 24 24"
                width="24px"
              >
                <use href="#arrow"></use>
              </svg>
            </button>
            <span className="timeline__dot"> </span>
            <span className="timeline__meta" id="item3-name">
              <time className="timeline__date" datetime="1970-01-01">
                {" "}
                2019{" "}
              </time>
              <br />
              <strong className="timeline__title"> Matriculation </strong>
            </span>
          </div>
          <div
            aria-hidden="true"
            aria-labelledby="item3"
            className="timeline__item-body"
            id="item3-ctrld"
            role="region"
          >
            <div className="timeline__item-body-content">
              <p className="timeline__item-p">St. Martins High School</p>
              <p className="timeline__item-p">Percentage: 79.6%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline" id="certificatesTimeline">
        <div className="timeline__item">
          <div className="timeline__item-header">
            <button
              aria-controls="item4-ctrld"
              aria-expanded="false"
              aria-haspopup="true"
              aria-labelledby="item4-name"
              className="timeline__arrow"
              data-item="4"
              id="item4"
              type="button"
            >
              <svg
                className="timeline__arrow-icon"
                height="24px"
                viewbox="0 0 24 24"
                width="24px"
              >
                <use href="#arrow"></use>
              </svg>
            </button>
            <span className="timeline__dot"> </span>
            <span className="timeline__meta" id="item4-name">
              <time className="timeline__date" datetime="1970-01-01">
                {" "}
                2024{" "}
              </time>
              <br />
              <strong className="timeline__title"> Amazon Web Services </strong>
            </span>
          </div>
          <div
            aria-hidden="true"
            aria-labelledby="item4"
            className="timeline__item-body"
            id="item4-ctrld"
            role="region"
          >
            <div className="timeline__item-body-content">
              <p className="timeline__item-p">
                AWS Certified Cloud Practitioner
              </p>
            </div>
          </div>
        </div>
        <div className="timeline__item">
          <div className="timeline__item-header">
            <button
              aria-controls="item5-ctrld"
              aria-expanded="false"
              aria-haspopup="true"
              aria-labelledby="item5-name"
              className="timeline__arrow"
              data-item="5"
              id="item5"
              type="button"
            >
              <svg
                className="timeline__arrow-icon"
                height="24px"
                viewbox="0 0 24 24"
                width="24px"
              >
                <use href="#arrow"></use>
              </svg>
            </button>
            <span className="timeline__dot"> </span>
            <span className="timeline__meta" id="item5-name">
              <time className="timeline__date" datetime="1970-01-01">
                {" "}
                2022{" "}
              </time>
              <br />
              <strong className="timeline__title"> Cloud Computing </strong>
            </span>
          </div>
          <div
            aria-hidden="true"
            aria-labelledby="item5"
            className="timeline__item-body"
            id="item5-ctrld"
            role="region"
          >
            <div className="timeline__item-body-content">
              <p className="timeline__item-p">
                Cloud Computing Workshop conducted by EXCELR
              </p>
            </div>
          </div>
        </div>
        <div className="timeline__item">
          <div className="timeline__item-header">
            <button
              aria-controls="item6-ctrld"
              aria-expanded="false"
              aria-haspopup="true"
              aria-labelledby="item6-name"
              className="timeline__arrow"
              data-item="6"
              id="item6"
              type="button"
            >
              <svg
                className="timeline__arrow-icon"
                height="24px"
                viewbox="0 0 24 24"
                width="24px"
              >
                <use href="#arrow"></use>
              </svg>
            </button>
            <span className="timeline__dot"> </span>
            <span className="timeline__meta" id="item6-name">
              <time className="timeline__date" datetime="1973-10-17">
                {" "}
                2022{" "}
              </time>
              <br />
              <strong className="timeline__title"> Verzeo </strong>
            </span>
          </div>
          <div
            aria-hidden="true"
            aria-labelledby="item6"
            className="timeline__item-body"
            id="item6-ctrld"
            role="region"
          >
            <div className="timeline__item-body-content">
              <p className="timeline__item-p">
                Verzeo Certificate of Internship
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
