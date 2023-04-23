import { FacebookLogo, InstagramLogo } from "phosphor-react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-right">
        <a
          className="social-logo"
          href="https://www.facebook.com/leaveyulialone"
          target="_blank"
        >
          <FacebookLogo size={36} />
        </a>
        <a
          className="social-logo"
          href="https://www.instagram.com/leave_yuli_alone/"
          target="_blank"
        >
          <InstagramLogo size={36} />
        </a>
      </div>
      <div className="footer-left">Online Store by Yuli Tamara</div>
    </div>
  );
};
