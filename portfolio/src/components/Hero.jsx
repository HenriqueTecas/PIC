import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Henrique Rodrigues</h1>
          <h2 className="hero-title">I build innovative engineering solutions</h2>
          <p className="hero-description">
            I'm an Electrical and Computer Engineering student with a passion for innovation
            and problem-solving. Currently focused on cutting-edge projects in embedded systems,
            signal processing, and AI-driven technologies.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <h3>🎓 Student</h3>
              <p>Instituto Superior Técnico</p>
            </div>
          </div>
          <div className="floating-card">
            <div className="card-content">
              <h3>🏆 Winner</h3>
              <p>TecStorms Hackathon 2024/25</p>
            </div>
          </div>
          <div className="floating-card">
            <div className="card-content">
              <h3>💡 Innovator</h3>
              <p>AI & Embedded Systems</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
