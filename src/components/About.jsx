import "../App.css";

function About() {
  const openURL = () => {
    const url = "/file.pdf";
    window.open(url, "_blank");
  };

  return (
    <>
      {/* <div className="col aboutme-content">
        <h1 className="aboutme-heading">About Me</h1>
        <div className="about-me row">
          <div className="col music">
            <iframe
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowfullscreen=""
              frameborder="0"
              height="352"
              loading="lazy"
              src="https://open.spotify.com/embed/track/6LNcsgZONyra3eEwSdCGN8?utm_source=generator"
              width="100%"
            ></iframe>
          </div>
          <p className="description">
            👋 Hi, my name is
            <strong> Ritesh Kumar </strong>. I'm a Full Stack Developer where I
            really value clean and readable code. Also, I'm very passionate
            about
            <strong> coding </strong>. I enjoy playing esports, and I'm a bit of
            a geek now and then.
          </p>
          <div className="res-btn">
            <button className="resume-btn" id="resume-btn" onClick={openURL}>
              <div className="sign">
                <svg viewBox="0 0 640 512">
                  <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                </svg>
              </div>

              <div className="text">Resume</div>
            </button>
          </div>
        </div>
      </div> */}
      <div className="col aboutme-content">
        
        <div className="about-me row">
        
          {/* Spotify embed */}
          <div className="col music">
            <iframe
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen=""
              frameBorder="0"
              height="352"
              loading="lazy"
              src="https://open.spotify.com/embed/track/6LNcsgZONyra3eEwSdCGN8?utm_source=generator"
              width="100%"
            ></iframe>
          </div>

          {/* Text and Resume button */}
          <div className="col text-section">
          <h1 className="aboutme-heading">About Me</h1>
            <p className="description">
              👋 Hi, my name is <strong>Ritesh Kumar</strong>. I'm a Full Stack
              Developer who really values clean and readable code. I'm
              passionate about <strong>coding</strong> and enjoy playing
              esports. I'm a bit of a geek now and then.
            </p>
            <div className="res-btn">
              <button className="resume-btn" id="resume-btn" onClick={openURL}>
                <div className="sign">
                  <svg viewBox="0 0 640 512">
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                  </svg>
                </div>
                <div className="text">Resume</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
