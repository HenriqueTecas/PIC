import { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'MuteMotion',
      tagline: 'Every Second Counts - Innovation in Emergency Response',
      category: 'IoT / Embedded Systems / AI',
      year: '2024-2025',
      award: 'TecStorms Hackathon Winner',
      description: 'MuteMotion is a revolutionary directional sound technology designed to improve emergency medical response. Using parametric speaker technology, it ensures ambulances are heard by those who need to move—not by those who need to heal.',
      problem: 'Traditional ambulance sirens (exceeding 120 decibels) effectively clear traffic but cause harmful stress to patients already in critical condition. This creates a fundamental conflict in emergency medicine.',
      solution: 'A parametric speaker system that uses ultrasonic generation (40+ kHz) with computer vision and servo motors to create directional sound beams (15-degree width) targeted at nearby vehicles, reducing interior ambulance noise from 120+ to ~70 decibels.',
      features: [
        {
          icon: '🔊',
          title: 'Parametric Speaker',
          description: 'Ultrasonic generation above 40 kHz with directional demodulation'
        },
        {
          icon: '🎯',
          title: 'Smart Targeting',
          description: 'Computer vision with 180-degree pan range servo motors for automated targeting'
        },
        {
          icon: '📉',
          title: 'Noise Reduction',
          description: 'Interior noise reduced from 120+ to 70 decibels, protecting patient health'
        },
        {
          icon: '🚑',
          title: 'Traffic Clearing',
          description: 'Maintains effectiveness while reducing urban noise pollution'
        },
        {
          icon: '⚡',
          title: 'Response Time',
          description: 'Saves 1-4 minutes in urban environments, potentially saving lives'
        },
        {
          icon: '🛡️',
          title: 'Safety',
          description: 'Reduces hearing damage risk for EMS personnel and patient stress responses'
        }
      ],
      technologies: ['Embedded Systems', 'Computer Vision', 'Signal Processing', 'Ultrasonic Technology', 'Servo Control', 'AI/ML'],
      impact: [
        'Patient stress responses mitigated (30% heart rate increase reduction)',
        'Blood pressure elevation reduced by 14 mmHg',
        '1-4 minutes saved in urban emergency response',
        'Significant reduction in urban noise pollution'
      ],
      links: {
        demo: 'https://henriquetecas.github.io/MuteMotion/',
        github: 'https://github.com/HenriqueTecas/MuteMotion'
      },
      color: '#00ff88'
    },
    {
      id: 2,
      title: 'EUDIS Laser Targeting System',
      tagline: 'Precision Targeting for Next-Generation Drones',
      category: 'Robotics / Laser Systems / Fiber Optics',
      year: '2024',
      description: 'EUDIS (Enhanced Unmanned Directional Illumination System) is an advanced laser targeting system designed for fiber optic drones. The system combines precision mechanics with intelligent tracking capabilities.',
      problem: 'Traditional drone targeting systems lack the precision and flexibility needed for fiber optic communication and laser-based operations, especially in dynamic environments.',
      solution: 'A sophisticated pan-tilt mechanism mounted on a cylindrical base with integrated laser systems. The device features precision servo motors for 360-degree rotation and precise elevation control, enabling accurate targeting and tracking.',
      features: [
        {
          icon: '🎯',
          title: 'Precision Targeting',
          description: 'High-accuracy laser positioning with servo-controlled pan-tilt mechanism'
        },
        {
          icon: '🔄',
          title: '360° Rotation',
          description: 'Full rotational capability for comprehensive coverage'
        },
        {
          icon: '💡',
          title: 'Fiber Optic Integration',
          description: 'Specialized design for fiber optic drone communication systems'
        },
        {
          icon: '⚙️',
          title: 'Modular Design',
          description: 'Compact cylindrical base with easily replaceable components'
        },
        {
          icon: '🎛️',
          title: 'Dual Axis Control',
          description: 'Independent pan and tilt servo control for precise movement'
        },
        {
          icon: '🔧',
          title: 'Robust Construction',
          description: 'Industrial-grade materials ensuring reliability in various conditions'
        }
      ],
      technologies: ['Robotics', 'Laser Systems', 'Servo Control', 'Fiber Optics', 'Mechanical Engineering', 'Control Systems'],
      impact: [
        'Enhanced precision in drone-based fiber optic communication',
        'Improved targeting accuracy for laser-based systems',
        'Modular design enabling easy maintenance and upgrades',
        'Compact form factor suitable for mobile deployment'
      ],
      specifications: [
        'Pan Range: 360° continuous rotation',
        'Tilt Range: Precision elevation control',
        'Servo Response: High-speed, low-latency positioning',
        'Base Design: Cylindrical with ventilation slots',
        'Mounting: Universal platform compatibility'
      ],
      color: '#ff6b35'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Innovative solutions at the intersection of hardware and software
          </p>
        </div>

        <div className="project-selector">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`selector-btn ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
              style={{
                borderColor: activeProject === index ? project.color : 'rgba(100, 255, 218, 0.2)'
              }}
            >
              <span className="selector-number">0{index + 1}</span>
              <span className="selector-title">{project.title}</span>
            </button>
          ))}
        </div>

        <div className="project-showcase">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-detail ${activeProject === index ? 'active' : ''}`}
            >
              <div className="project-header">
                <div className="project-meta">
                  <span className="project-category" style={{ color: project.color }}>
                    {project.category}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                {project.award && (
                  <div className="project-award">
                    <span>🏆 {project.award}</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-main">
                  <div className="project-section">
                    <h4>Overview</h4>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-problem-solution">
                    <div className="problem-box">
                      <h4>⚠️ The Challenge</h4>
                      <p>{project.problem}</p>
                    </div>
                    <div className="solution-box">
                      <h4>✨ The Solution</h4>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  <div className="project-section">
                    <h4>Key Features</h4>
                    <div className="features-grid">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`feature-card ${hoveredFeature === `${index}-${idx}` ? 'hovered' : ''}`}
                          onMouseEnter={() => setHoveredFeature(`${index}-${idx}`)}
                          onMouseLeave={() => setHoveredFeature(null)}
                          style={{
                            borderColor: hoveredFeature === `${index}-${idx}` ? project.color : 'rgba(100, 255, 218, 0.2)'
                          }}
                        >
                          <div className="feature-icon">{feature.icon}</div>
                          <h5>{feature.title}</h5>
                          <p>{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="project-section">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag" style={{ borderColor: project.color }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-section">
                    <h4>{project.specifications ? 'Technical Specifications' : 'Impact & Results'}</h4>
                    <ul className="impact-list">
                      {(project.specifications || project.impact).map((item, idx) => (
                        <li key={idx}>
                          <span style={{ color: project.color }}>▸</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.links && (
                    <div className="project-links">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          style={{ borderColor: project.color, color: project.color }}
                        >
                          <span>View Live Demo</span>
                          <span>→</span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          style={{ borderColor: project.color, color: project.color }}
                        >
                          <span>View on GitHub</span>
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
