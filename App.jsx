import img1 from './assets/gallery/img1.jpeg'
import img2 from './assets/gallery/img2.jpeg'
import img3 from './assets/gallery/img3.jpeg'
import img4 from './assets/gallery/img4.jpeg'
import img5 from './assets/gallery/img5.jpeg'
import img6 from './assets/gallery/img6.jpeg'

import './App.css'

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Charan Raj</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="greeting">Hello, I'm</p>
          <h1>
            Charan Ra<span className="custom-j">j<span className="j-dot"></span></span>
            </h1>
          <h2>System Admin</h2>

          <p className="hero-description">
            <p className="hero-description">
  Currently working as a System Administrator, I enjoy solving technical
  challenges, keeping systems running smoothly, and continuously learning
  new technologies.
</p>
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-tag">ABOUT ME</p>
        <h2>Building, Learning & Growing in Technology.</h2>

        <p>
          I am a BCA graduate currently working as a System Administrator.
          I enjoy solving technical problems, managing systems, and exploring
          technologies that create meaningful digital experiences.
        </p>
      </section>

      {/* Skills */}
<section id="skills" className="section">
  <p className="section-tag">SKILLS</p>
  <h2>My Technical Toolkit</h2>

  <p className="skills-intro">
    A focused set of technologies I use and continue to develop throughout
    my professional journey.
  </p>

  <div className="skills-grid">
    <div className="skill-card">Linux</div>
    <div className="skill-card">Windows Server Administration</div>
    <div className="skill-card">Cloud Computing</div>
    <div className="skill-card">Python</div>
    <div className="skill-card">Java</div>
    <div className="skill-card">Networking</div>
  </div>
</section>

      {/* Experience */}
      <section id="experience" className="section">
        <p className="section-tag">EXPERIENCE</p>
        <h2>My Professional Journey</h2>

        <div className="experience-card">
  <div className="experience-header">
    <div>
      <h3>System Administrator</h3>
      <p className="company">VXplore Academy</p>
    </div>
    <span className="experience-date">Aug 2026 – Present</span>
  </div>

  <ul className="experience-list">
    <li>
      Managed and organized academic content, including lecture videos,
      study materials, and resources across web and mobile platforms.
    </li>
    <li>
      Monitored systems proactively and resolved technical issues to help
      maintain reliable platform performance and availability.
    </li>
    <li>
      Implemented role-based access controls and supported security practices
      to protect sensitive educational content and user data.
    </li>
    <li>
      Collaborated with development teams to test and deploy new features
      while supporting users with login, content access, and platform issues.
    </li>
  </ul>
</div>

        <div className="experience-card">
  <div className="experience-header">
    <div>
      <h3>AI & Machine Learning Intern</h3>
      <p className="company">Scontinent Technologies Pvt. Ltd.</p>
    </div>
    <span className="experience-date">Mar 2026 – Jun 2026</span>
  </div>

  <ul className="experience-list">
    <li>
      Contributed to the development of an AI-powered personalized learning
      assistant using continual learning and lifelong memory concepts.
    </li>
    <li>
      Worked with machine learning concepts and explored how AI can be applied
      to create more personalized and adaptive learning experiences.
    </li>
    <li>
      Gained practical experience in applying AI and machine learning concepts
      within a project-based development environment.
    </li>
  </ul>
</div>

       <div className="experience-card">
  <div className="experience-header">
    <div>
      <h3>Social Media Marketing</h3>
      <p className="company">SPC Electronics</p>
    </div>
    <span className="experience-date">Mar 2025 – Sept 2025</span>
  </div>

  <ul className="experience-list">
    <li>
      Created and edited promotional posters and digital content for
      electronic products and social media campaigns.
    </li>
    <li>
      Managed and published product-focused content across social media
      platforms to support brand visibility.
    </li>
    <li>
      Supported business development activities through cold calling and
      email outreach, including freelance client support.
    </li>
  </ul>
</div>
      </section>

      {/* Projects */}
<section id="projects" className="section">
  <p className="section-tag">PROJECTS</p>
  <h2>Selected Work</h2>

  <div className="projects-grid">
    {/* RecruitAI */}
    <article className="project-card featured-project">
      <span className="project-label">FEATURED PROJECT</span>

      <h3>RecruitAI</h3>

      <p>
        An AI-powered resume screening and ranking system designed to help
        streamline the recruitment process by analyzing resumes and matching
        candidates with relevant job requirements.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>FastAPI</span>
        <span>React</span>
        <span>PostgreSQL</span>
        <span>AI/ML</span>
      </div>

      <div className="project-links">
  <a
    href="https://listed-k7jo.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View Live Project ↗
  </a>
</div>
    </article>

    {/* Banking System */}
    <article className="project-card">
      <span className="project-label">SOFTWARE PROJECT</span>

      <h3>Banking System</h3>

      <p>
        A banking application developed to manage essential banking operations
        and provide a structured approach to handling customer accounts and
        transactions.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Database</span>
      </div>

      <div className="project-links">
  <a
    href="https://github.com/charan-gt/Banking-System"
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    View on GitHub ↗
  </a>
</div>
    </article>
  </div>
</section>

{/* Education & Certifications */}
<section id="education" className="section">
  <p className="section-tag">EDUCATION & CERTIFICATIONS</p>
  <h2>Learning & Credentials</h2>

  <div className="education-grid">

    <div className="education-card">
      <span className="education-label">EDUCATION</span>
      <h3>Bachelor of Computer Applications(BCA)</h3>
      <p className="institution">
        Seshadripuram Academy of Business Studies
      </p>
      <span className="education-date">2023 – 2026</span>
    </div>

    <div className="education-card">
      <span className="education-label">CERTIFICATION</span>
      <h3>Java Programming Fundamentals</h3>
      <p className="institution">BALC</p>
      <span className="education-date">2024</span>
    </div>

    <div className="education-card">
      <span className="education-label">CERTIFICATION</span>
      <h3>Python foundation</h3>
      <p className="institution">Simplilearn</p>
      <span className="education-date">2024</span>
    </div>

  </div>
</section>


      {/* Gallery */}
      <section id="gallery" className="section">
        <p className="section-tag">MY GALLERY</p>
        <h2>Beyond Technology 📸</h2>

        <p>
          A collection of moments, landscapes, and photographs captured along
          the journey.
        </p>

        <div className="gallery-grid">
          <img src={img1} alt="Gallery moment 1" />
          <img src={img2} alt="Gallery moment 2" />
          <img src={img3} alt="Gallery moment 3" />
          <img src={img4} alt="Gallery moment 4" />
          <img src={img5} alt="Gallery moment 5" />
          <img src={img6} alt="Gallery moment 6" />
          </div>
      </section>

      {/* Contact */}
<section id="contact" className="section">
  <p className="section-tag">CONTACT</p>
  <h2>Let's Connect</h2>

  <p className="contact-description">
    Have an opportunity, project, or idea in mind? I'd be happy to connect
    and discuss how we can work together.
  </p>

  <div className="contact-links">
    <a
      href="mailto:ch"
      className="contact-card"
    >
      <span className="contact-icon">✉</span>
      <div>
        <span className="contact-label">EMAIL</span>
        <strong>charnraj17@gmail.com</strong>
      </div>
    </a>

    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">⌘</span>
      <div>
        <span className="contact-label">GITHUB</span>
        <strong>charan-gt</strong>
      </div>
    </a>

    <a
      href="https://www.linkedin.com/in//"
      className="contact-card"
    >
      <span className="contact-icon">in</span>
      <div>
        <span className="contact-label">LINKEDIN</span>
        <strong>Connect with me</strong>
      </div>
    </a>

    {/* Instagram */}
<a
  href="https://www.instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <span className="contact-icon">◎</span>
  <div>
    <span className="contact-label">INSTAGRAM</span>
    <strong>Follow my journey</strong>
  </div>
</a>

{/* Spotify Playlist */}
<a
  href="https://open.spotify.com/playlist/4fomGwpZ6tN_Ag&utm_source=copy-link&pi=KlxY8s8QTmyLk"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <span className="contact-icon">♫</span>
  <div>
    <span className="contact-label">SPOTIFY</span>
    <strong>Listen to my playlist</strong>
  </div>
</a>
  </div>
</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Charan Raj. Built with React.</p>
      </footer>
    </>
  )
}

export default App