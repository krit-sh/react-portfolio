import "../App.css";
import InstagramIcon from "/Images/Logo/instagram.svg";
import LinkedinIcon from "/Images/Logo/linkedin.svg";
import GithubIcon from "/Images/Logo/github.svg";
import GmailIcon from "/Images/Logo/gmail.svg";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-background">
        <div className="footer-blob"></div>
      </div>
      <div className="footer-foreground">
        <div className="footercontainer">
          <div className="social-media-container">
            <div className="getintouch-heading">
              <article data-aos="fade-up" data-aos-delay="0" id="hello-friend">
                {"GetinTouch();".split("").map((char, idx) => (
                  <p key={idx} className="jello">{char}</p>
                ))}
              </article>
            </div>
            <div className="logos">
              <a
                aria-label="My instagram"
                href="https://www.instagram.com/yoriteshh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramIcon} alt="Instagram" className="SocialHandle" />
              </a>
              <a
                aria-label="My Linkedin"
                href="https://www.linkedin.com/in/ritesh-kumar-18b9b7224/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinIcon} alt="LinkedIn" className="SocialHandle" />
              </a>
              <a
                aria-label="My Github"
                href="https://github.com/krit-sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubIcon} alt="GitHub" className="SocialHandle" />
              </a>
              <a
                aria-label="My Gmail"
                href="mailto:riteshkumarrk1085@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GmailIcon} alt="Gmail" className="SocialHandle" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
