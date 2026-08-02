import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML/Data Science Intern (Trainee, SAG)</h4>
                <h5>DRDO – Ministry of Defence · Delhi</h5>
              </div>
              <h3>Dec 2025 – May 2026</h3>
            </div>
            <p>
              Engineered end-to-end ML pipeline processing 1M+ RC4 keystream samples. 
              Designed robust ETL pipelines for cryptographic data generation, cleaning, 
              and feature engineering. Built XGBoost + ANN ensemble achieving 95% accuracy 
              in detecting key-to-output leakage. Implemented SHAP/LIME explainability 
              frameworks and delivered 3x speedup (2-week → 5-day turnaround). Presented 
              findings to senior research staff and Defence Ministry officials.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Virtual Intern (Springboard)</h4>
                <h5>Infosys · Remote</h5>
              </div>
              <h3>Feb – Apr 2026</h3>
            </div>
            <p>
              Architected and shipped Crypto Portfolio Manager—a full-stack investment 
              analytics platform (Python/Node.js/React/PostgreSQL). Engineered AI-driven 
              recommendation engine with 18% outperformance vs. baseline. Built JWT auth, 
              real-time KPI dashboards for 50+ digital assets, and concurrent user support. 
              Delivered 30% faster requirements-to-delivery through Agile workflows and 
              formal stakeholder presentations.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics & Marketing Intelligence Intern (Intern of the Month)</h4>
                <h5>Reve Cult · Remote</h5>
              </div>
              <h3>Sep – Dec 2025</h3>
            </div>
            <p>
              Engineered Power BI dashboards analyzing campaign KPIs (CTR, conversion, 
              audience reach, ROI) for 15+ concurrent campaigns across 5 product lines. 
              Identified performance bottlenecks through EDA and SQL analysis. Collaborated 
              with cross-functional teams to execute data-driven optimizations. Delivered 
              30%+ engagement lift, 100K+ impressions, and 25% ROI improvement. Recognized 
              as Intern of the Month for measurable business impact.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;