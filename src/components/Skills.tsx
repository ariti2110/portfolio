

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript", "Java", "R", "VBA", "Bash Scripting"]
  },
  {
    category: "Machine Learning & AI",
    skills: ["XGBoost", "scikit-learn", "Neural Networks", "SHAP", "LIME", "Predictive Modeling", "Feature Engineering", "Statistical Analysis", "EDA", "A/B Testing", "NLP", "LangChain", "RAG", "Google Gemini Pro", "Prompt Engineering"]
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express.js", "FastAPI", "REST API", "JWT Authentication", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Vector Databases", "Query Optimization", "Microservices", "CI/CD Pipelines"]
  },
  {
    category: "Frontend & UI",
    skills: ["React.js", "Streamlit", "HTML5", "CSS3", "TypeScript", "Responsive Design"]
  },
  {
    category: "Data & Analytics",
    skills: ["pandas", "NumPy", "Tableau", "Power BI", "Excel (Pivot Tables, Macros, DAX)", "Matplotlib", "Seaborn", "KPI Dashboards", "Data Visualization"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Agile/Scrum", "Jira", "UiPath RPA", "MATLAB", "Linux"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS Basics", "Cloud Deployment", "Environment Setup"]
  }
];

export const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>Technical Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <p>
            <strong>Core Competencies:</strong> Machine Learning, Full-Stack Development, Data Engineering, 
            LLM/GenAI Integration, API Design, Database Optimization, Real-time Systems, Agile Development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;