

const certificationsData = [
  {
    category: "Awards & Recognition",
    items: [
      "Intern of the Month - Reve Cult (Dec 2025)",
      "National Hackathon Winner - FarmAI, Geek Room Case Clinic (₹10,000 prize, defeated 500+ teams)",
      "2nd Place - Mock Placement Category, Tech Fest PRADARSHAN 4.0, SGT University",
      "Google Prompt Creator Award - Top Prompt Creator (May 2026)",
      "Certificate of Merit - Aspiring Academic Association Award (Academic Excellence)"
    ]
  },
  {
    category: "Technical Certifications",
    items: [
      "Coding Ninjas DSA with Python - Certificate of Excellence, Top Performer (Sep 2023 - Mar 2024)",
      "Coding Ninjas Introduction to Python - Certificate of Excellence (Sep - Oct 2023)",
      "UiPath Academy - Automation Developer SAP Specialist Diploma (Mar 2024)",
      "Samsung Innovation Campus: Big Data (Nov 2025 - Mar 2026)",
      "LeetCode Data Navigator Badge"
    ]
  },
  {
    category: "Data Science & AI",
    items: [
      "British Airways Data Science Simulation - Forage (Feb 2025)",
      "Tata Data Visualization Simulation - Forage (Jan 2025)",
      "Google Career Glow-Up Program - Top 5 Finalist (1000s of applicants)",
      "Modern AI Tools - Saras AI Institute (Aug 2025)",
      "be10x AI Tools & ChatGPT Workshop - Verified Completion (Jan 2026)"
    ]
  },
  {
    category: "Programming & Development",
    items: [
      "HackerRank Certifications - Python, Java, JavaScript, Problem Solving",
      "Reskill Spark AR leARN - AR Journey Participation Certificate"
    ]
  },
  {
    category: "Government & Ministry Credentials",
    items: [
      "DRDO Completion Certificate - Trainee, Scientific Analysis Group (SAG), Ministry of Defence (Dec 2025 - May 2026)",
      "Infosys Springboard: Crypto Portfolio Manager Completion Certificate (Feb - Apr 2026)",
      "SGT University Training & Placement Cell - Internship Selection Recognition Poster (DRDO SAG)"
    ]
  }
];

export const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <h2>Certifications & Awards</h2>

        <div className="certifications-grid">
          {certificationsData.map((certGroup, index) => (
            <div key={index} className="cert-category">
              <h3>{certGroup.category}</h3>
              <ul>
                {certGroup.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cert-summary">
          <p>
            <strong>Recognition:</strong> Proven track record of excellence through awards from top organizations 
            (DRDO, Infosys, Google, McKinsey), national hackathon wins, and consistent academic and professional achievements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;