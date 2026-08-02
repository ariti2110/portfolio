import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">

          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href="https://www.linkedin.com/in/ariti-chawla/" target="_blank" rel="noreferrer" data-cursor="disable">
                LinkedIn — ariti-chawla
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech Computer Science Engineering, SGT University, Gurugram — 2022–2026</p>
            <h4>Email</h4>
            <p>
              <a href="mailto:aritichawla2110@gmail.com" data-cursor="disable">
                aritichawla2110@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/ariti2110" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              GitHub <MdArrowOutward />
            </a>
            <a href="https://www.linkedin.com/in/ariti-chawla/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
            <a href="https://leetcode.com/u/aritichawla2110/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LeetCode <MdArrowOutward />
            </a>
            <a href="https://www.hackerrank.com/profile/aritichawla2110" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              HackerRank <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ariti Chawla</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;