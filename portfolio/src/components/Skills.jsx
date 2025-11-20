import { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    {
      name: 'C',
      category: 'programming',
      level: 5,
      icon: '⚡',
      description: 'Systems programming and embedded development'
    },
    {
      name: 'Python',
      category: 'programming',
      level: 5,
      icon: '🐍',
      description: 'AI/ML, data analysis, and automation'
    },
    {
      name: 'JavaScript',
      category: 'programming',
      level: 5,
      icon: '🌐',
      description: 'Web development and interactive applications'
    },
    {
      name: 'R',
      category: 'programming',
      level: 3,
      icon: '📊',
      description: 'Statistical computing and data visualization'
    },
    {
      name: 'VHDL',
      category: 'hardware',
      level: 5,
      icon: '🔌',
      description: 'FPGA and digital circuit design'
    },
    {
      name: 'LTSpice',
      category: 'hardware',
      level: 5,
      icon: '⚙️',
      description: 'Circuit simulation and analysis'
    },
    {
      name: 'EDA Tools',
      category: 'hardware',
      level: 5,
      icon: '🛠️',
      description: 'Electronic design automation'
    },
    {
      name: 'Machine Learning',
      category: 'ai',
      level: 4,
      icon: '🤖',
      description: 'Deep learning and neural networks'
    },
    {
      name: 'Computer Vision',
      category: 'ai',
      level: 4,
      icon: '👁️',
      description: 'Image processing and object detection'
    },
    {
      name: 'Signal Processing',
      category: 'engineering',
      level: 5,
      icon: '📡',
      description: 'Advanced DSP and filtering techniques'
    },
    {
      name: 'Embedded Systems',
      category: 'engineering',
      level: 5,
      icon: '💾',
      description: 'Microcontrollers and IoT devices'
    },
    {
      name: 'React',
      category: 'web',
      level: 4,
      icon: '⚛️',
      description: 'Modern frontend development'
    },
    {
      name: 'Git',
      category: 'tools',
      level: 5,
      icon: '📚',
      description: 'Version control and collaboration'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: '🌟' },
    { id: 'programming', name: 'Programming', icon: '💻' },
    { id: 'hardware', name: 'Hardware', icon: '🔌' },
    { id: 'ai', name: 'AI/ML', icon: '🤖' },
    { id: 'engineering', name: 'Engineering', icon: '⚡' },
    { id: 'web', name: 'Web Dev', icon: '🌐' },
    { id: 'tools', name: 'Tools', icon: '🛠️' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>

              <p className="skill-description">{skill.description}</p>

              <div className="skill-level-container">
                <div className="skill-level-bar">
                  <div
                    className="skill-level-fill"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
                <div className="skill-level-dots">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i < skill.level ? 'filled' : ''}`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🎓</div>
            <h3>Continuous Learning</h3>
            <p>
              Actively expanding knowledge through courses, hackathons, and hands-on projects
            </p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <h3>Innovation Driven</h3>
            <p>
              Combining multiple technologies to create cutting-edge solutions
            </p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🤝</div>
            <h3>Collaborative</h3>
            <p>
              Strong team player with excellent communication across technical domains
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
