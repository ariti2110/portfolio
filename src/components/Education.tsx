

export const Education = () => {
  return (
    <section className="education-section">
      <div className="education-container">
        <h2>Education</h2>

        <div className="education-item">
          <div className="education-header">
            <h3>Bachelor of Technology (B.Tech) in Computer Science & Engineering</h3>
            <span className="year">Graduating 2026</span>
          </div>
          <p className="institution">SGT University, Gurugram, India</p>
          <div className="education-details">
            <p><strong>Focus Areas:</strong> Artificial Intelligence, Machine Learning, Data Analytics, Full-Stack Development</p>
            <p><strong>Achievements:</strong> Certificate of Merit - Aspiring Academic Association Award (Academic Excellence in CS)</p>
          </div>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h3>Leadership & Professional Development</h3>
          </div>
          <ul className="development-list">
            <li><strong>McKinsey Forward Program</strong> - Infosys Pragati Cohort 3 (Leadership Development)</li>
            <li><strong>Google Student Ambassador</strong> - Pitch Night Edition (May 2026)</li>
            <li><strong>Skillsoft Leadership Development Program</strong> - MIT Sloan (Leading with Executive Presence)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;