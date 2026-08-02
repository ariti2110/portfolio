import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a final-year Computer Science student at SGT University, Gurugram, 
          graduating in 2026. I specialize in AI/ML engineering, full-stack development, 
          and data-driven problem solving. Across three internships, I've shipped systems 
          across the stack: ML pipelines at DRDO (1M+ samples, 95% accuracy), full-stack 
          applications at Infosys, and data analytics at Reve Cult. I won a national 
          hackathon with FarmAI and consistently deliver projects with measurable impact.
        </p>
        <p className="para">
          I think like a systems engineer: What can break? How do we monitor it? 
          How do we scale it? Whether building ML infrastructure, conversational AI, 
          full-stack applications, or data dashboards, I obsess over reliability, 
          performance, and customer outcomes. I'm equally comfortable deep in code, 
          in a Jupyter notebook, or presenting technical findings to non-technical stakeholders.
        </p>
      </div>
    </div>
  );
};

export default About;