

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Ariti Chawla</h1>
          <p className="tagline">AI/ML Engineer | Full-Stack Developer | Data-Driven Problem Solver</p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <span className="label">Email:</span>
            <a href="mailto:aritichawla2110@gmail.com">aritichawla2110@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="label">Phone:</span>
            <a href="tel:+919773804367">+91 9773804367</a>
          </div>
          <div className="contact-item">
            <span className="label">LinkedIn:</span>
            <a href="https://linkedin.com/in/ariti-chawla" target="_blank" rel="noopener noreferrer">linkedin.com/in/ariti-chawla</a>
          </div>
          <div className="contact-item">
            <span className="label">GitHub:</span>
            <a href="https://github.com/ariti2110" target="_blank" rel="noopener noreferrer">github.com/ariti2110</a>
          </div>
          <div className="contact-item">
            <span className="label">Portfolio:</span>
            <a href="https://portfolio-theta-beryl-86.vercel.app/" target="_blank" rel="noopener noreferrer">portfolio-theta-beryl-86.vercel.app</a>
          </div>
        </div>

        <div className="resume-download">
          <a href="/resume/Ariti_Chawla_Resume_ATS.pdf" download className="download-btn">
            📥 Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;