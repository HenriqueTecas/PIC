import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a visionary and highly motivated <strong>Electrical and Computer Engineering</strong> student
              at <strong>Instituto Superior Técnico</strong>, currently in my 3rd year. With a remarkable
              aptitude for innovation, I demonstrate exceptional project development skills.
            </p>
            <p>
              Possessing a robust foundation in electrical engineering principles and sophisticated
              programming methodologies, I approach complex technological challenges with analytical
              precision and creative problem-solving.
            </p>
            <p>
              My intellectual curiosity drives me to continuously expand my knowledge horizons, while my
              adaptability allows me to thrive in dynamic, fast-paced work environments. I am committed
              to excellence in every endeavor, combining technical expertise with strategic thinking to
              deliver impactful solutions at the intersection of engineering and innovation.
            </p>

            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-header">
                  <h4>Bachelor's in Electrical and Computer Engineering</h4>
                  <span className="education-year">Current - 3rd Year</span>
                </div>
                <p className="education-school">Instituto Superior Técnico</p>
              </div>
              <div className="education-item">
                <h4>Additional Courses</h4>
                <ul>
                  <li>Energy Sources, Conversion, and Storage Course - Warsaw University of Technology (WUT)</li>
                  <li>Augmented and Virtual Reality for Engineering - National University of Science and Technology Politehnica Bucharest</li>
                </ul>
              </div>
            </div>

            <div className="work-section">
              <h3>Work Experience</h3>
              <p>
                Engaging in various labor-intensive jobs during summers has been a transformative experience,
                providing me with a unique perspective on hard work and resilience. Beyond the physical demands,
                these roles taught me invaluable interpersonal skills and how to effectively deal with people
                in dynamic work environments. These experiences fostered adaptability and problem-solving in
                high-pressure situations, reinforcing my ability to collaborate with diverse teams while maintaining
                focus on shared objectives.
              </p>
            </div>

            <div className="interests-section">
              <h3>Interests & Passion</h3>
              <p>
                I am deeply passionate about the transformative potential of <strong>artificial intelligence and
                machine learning</strong>, particularly at their intersection with quantum computations. My intellectual
                fascination extends to cutting-edge developments in <strong>embedded systems architecture</strong> and
                advanced signal processing methodologies.
              </p>
              <p>
                Beyond the technical realm, I am an avid bibliophile with an insatiable appetite for diverse literature
                spanning philosophy, science, and cultural studies, which nurtures my interdisciplinary thinking approach.
                My professional ethos is characterized by exceptional collaborative capabilities, innovative problem-solving
                methodologies, unwavering commitment to continuous intellectual growth, and articulate communication across
                technical and non-technical domains.
              </p>
            </div>
          </div>

          <div className="about-achievements">
            <div className="achievement-card highlight">
              <div className="achievement-icon">🏆</div>
              <h4>TecStorms Hackathon Winner</h4>
              <p className="achievement-year">2024/2025</p>
              <p>
                Portugal's largest hackathon - Developed parametric speaker with vehicle/human detection
                and automated targeting system
              </p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">📍</div>
              <h4>Contact Information</h4>
              <div className="contact-info">
                <p><strong>Email:</strong> hbacdsr@gmail.com</p>
                <p><strong>Phone:</strong> +351 966549672</p>
                <p><strong>Address:</strong> Rua Do Marco Nº2, Bica Cela Nova, Alcobaça, 2460-343</p>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">3rd</div>
                <div className="stat-label">Year Student</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
