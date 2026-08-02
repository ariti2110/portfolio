import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "RC4 Cryptanalysis Pipeline",
    category: "ML-Based Keystream Bias Detection · DRDO, Ministry of Defence",
    tools: "Python, XGBoost, ANN, SHAP, LIME, ETL, Feature Engineering",
    description: "Engineered end-to-end ML pipeline processing 1M+ RC4 keystream samples. Built XGBoost + ANN ensemble achieving 95% accuracy in detecting cryptographic vulnerabilities. Implemented SHAP/LIME explainability to quantify key-to-output leakage patterns. Delivered 3x speedup (2 weeks → 5 days turnaround).",
    image: "/images/placeholder.webp",
    link: "https://github.com/ariti2110/rc4-ml-ann-shap",
  },
  {
    title: "FarmAI",
    category: "National Hackathon Winner · AI-Powered Agricultural Intelligence",
    tools: "Python, LangChain, Google Gemini Pro, ML Ensemble, Prompt Engineering",
    description: "Developed AI-powered yield prediction platform defeating 500+ teams. Integrated LangChain with Google Gemini Pro + ML ensemble achieving 88% accuracy across 12+ crop varieties. Engineered retrieval-augmented generation (RAG) for real-time agricultural insights. Won ₹10,000 prize at Geek Room Case Clinic.",
    image: "/images/placeholder.webp",
    link: "https://github.com/ariti2110/farmAI",
  },
  {
    title: "SHL Assessor Bot",
    category: "Conversational AI for LLM Evaluation · Production Deployment",
    tools: "Python, LangChain, Google Gemini Pro, FastAPI, Vector Databases, Replit",
    description: "Built end-to-end conversational AI system for objective LLM response evaluation. Designed LLM-as-judge framework using Gemini Pro for semantic assessment (vs. rule-based). Implemented vector embedding pipeline for response clustering and pattern detection. Deployed to production on Replit Autoscale with zero-setup access.",
    image: "/images/placeholder.webp",
    link: "https://github.com/ariti2110",
  },
  {
    title: "Crypto Portfolio Manager",
    category: "Full-Stack AI Investment Analytics · Infosys Springboard",
    tools: "Python, Node.js, Express.js, React.js, PostgreSQL, JWT, REST API",
    description: "Architected full-stack investment analytics platform handling real-time crypto data for 50+ digital assets. Engineered AI-driven recommendation engine with 18% outperformance vs. baseline. Built JWT authentication, real-time KPI dashboards, and concurrent user support (8 users). Achieved 30% faster requirements-to-delivery cycle through Agile workflows.",
    image: "/images/placeholder.webp",
    link: "https://github.com/ariti2110/cryptoinvestment-manager",
  },
  {
    title: "Reve Cult Analytics Dashboard",
    category: "Data-Driven Marketing Intelligence · Marketing Analytics Internship",
    tools: "Power BI, Excel, SQL, DAX, Data Analysis, KPI Dashboards",
    description: "Engineered Power BI dashboards analyzing campaign KPIs (CTR, conversion, audience reach, ROI) for 15+ concurrent campaigns across 5 product lines. Identified performance bottlenecks through EDA and recommended optimization strategies. Delivered 30%+ engagement lift, 100K+ impressions, and 25% ROI improvement through data-driven insights and cross-functional collaboration.",
    image: "/images/placeholder.webp",
    link: "https://github.com/ariti2110",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        {project.description && (
                          <p className="carousel-description">
                            {project.description}
                          </p>
                        )}
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
