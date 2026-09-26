import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const principles = [
  [
    "01",
    "Start with the problem",
    "Understand the workflow, data, and success criteria before choosing a model or implementation.",
  ],
  [
    "02",
    "Make complexity visible",
    "Break large systems into clear interfaces, stages, and measurable checkpoints.",
  ],
  [
    "03",
    "Ship, then learn",
    "Use testing, evaluation, and feedback to turn experiments into dependable software.",
  ],
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <div>
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="hero container">
          <div className="hero-kicker">
            <span className="status-dot" />
            JUNIOR DATA ENGINEER · ML · SOFTWARE
          </div>

          <h1>
            Building systems
            <br />
            <em>that make data useful.</em>
          </h1>

          <p className="hero-copy">
            I build data-driven systems, machine learning models, and reliable
            software — from experiments and pipelines to production workflows.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>

            <a
              className="button ghost"
              href="https://github.com/slmaaanf"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span>EDUCATION</span>
              <strong>Universitas Muhammadiyah Sukabumi</strong>
            </div>

            <div className="hero-meta-item">
              <span>DEGREE</span>
              <strong>Informatics Engineering</strong>
            </div>

            <div className="hero-meta-item">
              <span>GPA</span>
              <strong>3.81 / 4.00</strong>
            </div>

            <div className="hero-meta-item">
              <span>BASED IN</span>
              <strong>Sukabumi, Indonesia</strong>
            </div>
          </div>
        </section>


        {/* =====================================================
            CURRENTLY BUILDING
        ====================================================== */}

        <section className="section current container">
          <div className="section-label">
            01 / CURRENTLY BUILDING
          </div>

          <div className="current-grid">
            <div>
              <p className="eyebrow">
                PRODUCTION WORKFLOW SYSTEM
              </p>

              <h2>
                Turning complex operational workflows into reliable software.
              </h2>
            </div>

            <div>
              <p className="muted">
                Building an internal enterprise production workflow application
                spanning raw-material preparation through Finish Good, with
                multi-stage execution, approvals, revoke/re-submit flows,
                group-based queues, and traceability.
              </p>

              <div className="tags large">
                {[
                  "Laravel",
                  "React",
                  "TypeScript",
                  "MySQL",
                  "GitLab",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            SELECTED WORK
        ====================================================== */}

        <section id="work" className="section container">
          <div className="section-heading">
            <div>
              <div className="section-label">
                02 / SELECTED WORK
              </div>

              <h2>
                Projects with a measurable result.
              </h2>
            </div>

            <span className="section-count">
              {featured.length.toString().padStart(2, "0")} FEATURED
            </span>
          </div>

          <div className="featured-grid">
            {featured.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>


        {/* =====================================================
            EXPERIENCE
        ====================================================== */}

        <section id="experience" className="section container">
          <div className="section-heading">
            <div>
              <div className="section-label">
                03 / EXPERIENCE
              </div>

              <h2>
                Experience building real systems.
              </h2>
            </div>

            <span className="section-count">
              04 ROLES
            </span>
          </div>

          <div className="timeline">

            <article className="timeline-item">
              <div className="timeline-date">
                AUG 2026 — PRESENT
              </div>

              <div className="timeline-content">
                <p className="eyebrow">
                  IT DEVELOPMENT · SOFTWARE ENGINEERING
                </p>

                <h3>
                  PT. Macroprima Panganutama (Cimory)
                </h3>

                <p className="muted">
                  Developing an end-to-end production workflow application
                  covering raw-material preparation through the Finished Good
                  stage.
                </p>

                <ul>
                  <li>
                    Owned approximately 55% of the documented implementation
                    scope, covering 78 of 142 effort points.
                  </li>

                  <li>
                    Built workflow services, database migrations, models,
                    API contracts, routes, shared registries, and integration
                    support.
                  </li>

                  <li>
                    Developed role-aware admin and operator interfaces using
                    React, TypeScript, and Vite.
                  </li>

                  <li>
                    Integrated frontend services with Laravel and MySQL for
                    production runs, SAP RM/PM reservations, and workstation
                    handoffs.
                  </li>

                  <li>
                    Worked with Git, GitLab, and GitLab Runner for version
                    control and CI/CD support.
                  </li>
                </ul>

                <div className="experience-stack">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Vite</span>
                  <span>Laravel</span>
                  <span>MySQL</span>
                  <span>GitLab</span>
                </div>
              </div>
            </article>


            <article className="timeline-item">
              <div className="timeline-date">
                JAN 2024 — JUL 2026
              </div>

              <div className="timeline-content">
                <p className="eyebrow">
                  TEACHING ASSISTANT
                </p>

                <h3>
                  Universitas Muhammadiyah Sukabumi
                </h3>

                <p className="muted">
                  Assisted in teaching Machine Learning and Deep Learning
                  courses for 30+ students per class.
                </p>

                <ul>
                  <li>
                    Delivered materials covering supervised learning,
                    neural networks, CNN, RNN, and model evaluation.
                  </li>

                  <li>
                    Designed assignments, case-based problems, and practical
                    coding exercises using Python.
                  </li>

                  <li>
                    Guided students through end-to-end machine learning
                    pipelines.
                  </li>

                  <li>
                    Mentored students in model optimization and debugging.
                  </li>
                </ul>

                <div className="experience-stack">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Deep Learning</span>
                  <span>CNN</span>
                  <span>RNN</span>
                </div>
              </div>
            </article>


            <article className="timeline-item">
              <div className="timeline-date">
                MAY 2025 — JUL 2025
              </div>

              <div className="timeline-content">
                <p className="eyebrow">
                  FULLSTACK DEVELOPER INTERN
                </p>

                <h3>
                  PT. Telekomunikasi Indonesia
                </h3>

                <p className="muted">
                  Developed an internal internship dashboard to improve
                  registration, document handling, and profile management.
                </p>

                <ul>
                  <li>
                    Built a Laravel dashboard that reduced manual registration
                    effort by 40%.
                  </li>

                  <li>
                    Integrated Google Drive API for automated file uploads
                    supporting more than 60 interns.
                  </li>

                  <li>
                    Improved profile UI/UX, reducing profile update time
                    by approximately 30%.
                  </li>
                </ul>

                <div className="experience-stack">
                  <span>Laravel</span>
                  <span>PHP</span>
                  <span>REST API</span>
                  <span>Google Drive API</span>
                </div>
              </div>
            </article>


            <article className="timeline-item">
              <div className="timeline-date">
                SEP 2024 — JAN 2025
              </div>

              <div className="timeline-content">
                <p className="eyebrow">
                  MACHINE LEARNING COHORT
                </p>

                <h3>
                  Bangkit Academy Indonesia
                </h3>

                <p className="muted">
                  Completed intensive industry-led training covering
                  end-to-end machine learning pipelines from preprocessing
                  to deployment.
                </p>

                <ul>
                  <li>
                    Developed an OCR-based receipt extraction system using
                    OpenCV and Tesseract with 90% accuracy.
                  </li>

                  <li>
                    Collaborated with ML, Cloud, and Mobile teams to deliver
                    an integrated end-to-end solution.
                  </li>

                  <li>
                    Solved 30+ algorithmic and case-based challenges.
                  </li>
                </ul>

                <div className="experience-stack">
                  <span>Python</span>
                  <span>OpenCV</span>
                  <span>Tesseract</span>
                  <span>Machine Learning</span>
                </div>
              </div>
            </article>

          </div>
        </section>


        {/* =====================================================
            ORGANIZATIONS
        ====================================================== */}

        <section
          id="organizations"
          className="section container"
        >
          <div className="section-heading">
            <div>
              <div className="section-label">
                04 / ORGANIZATIONS
              </div>

              <h2>
                Building communities beyond the classroom.
              </h2>
            </div>

            <span className="section-count">
              04 EXPERIENCES
            </span>
          </div>

          <div className="organization-list">

            <article className="organization-row">
              <div className="organization-index">
                01
              </div>

              <div className="organization-main">
                <p className="eyebrow">
                  TECH COMMUNITY BUILDER
                </p>

                <h3>
                  Dicoding Indonesia
                </h3>

                <p className="muted">
                  Aug 2025 — Jan 2026 · Sukabumi
                </p>
              </div>

              <div className="organization-description">
                <p>
                  Led and managed a community of 80 contributors from
                  different academic backgrounds, focusing on collaboration,
                  digital literacy, and technology adoption.
                </p>

                <p>
                  Organized structured learning paths and study groups
                  focused on foundational Front-End Development.
                </p>
              </div>
            </article>


            <article className="organization-row">
              <div className="organization-index">
                02
              </div>

              <div className="organization-main">
                <p className="eyebrow">
                  TREASURER
                </p>

                <h3>
                  Informatics Engineering Student Association
                </h3>

                <p className="muted">
                  Jan 2025 — Sep 2025 · Sukabumi
                </p>
              </div>

              <div className="organization-description">
                <p>
                  Managed financial reports, monitored fund usage, and
                  maintained structured bookkeeping systems.
                </p>

                <p>
                  Improved transparency and accuracy in organizational
                  financial tracking.
                </p>
              </div>
            </article>


            <article className="organization-row">
              <div className="organization-index">
                03
              </div>

              <div className="organization-main">
                <p className="eyebrow">
                  PUBLIC RELATIONS
                </p>

                <h3>
                  Informatics Engineering Student Association
                </h3>

                <p className="muted">
                  Dec 2023 — Dec 2024 · Sukabumi
                </p>
              </div>

              <div className="organization-description">
                <p>
                  Increased member engagement by 25% through structured
                  communication strategies.
                </p>

                <p>
                  Collaborated with more than 10 external universities to
                  organize networking events reaching over 150 participants.
                </p>
              </div>
            </article>


            <article className="organization-row">
              <div className="organization-index">
                04
              </div>

              <div className="organization-main">
                <p className="eyebrow">
                  STAFF · STUDIES & ADVOCACY
                </p>

                <h3>
                  BEM Faculty of Science and Technology
                </h3>

                <p className="muted">
                  Nov 2023 — Sep 2024 · Sukabumi
                </p>
              </div>

              <div className="organization-description">
                <p>
                  Conducted student issue analysis and produced reports
                  supporting policy advocacy.
                </p>

                <p>
                  Provided academic support and maintained data tracking
                  to help monitor student performance.
                </p>
              </div>
            </article>

          </div>
        </section>


        {/* =====================================================
            ACHIEVEMENTS
        ====================================================== */}

        <section
          id="achievements"
          className="section container"
        >
          <div className="section-heading">
            <div>
              <div className="section-label">
                05 / ACHIEVEMENTS
              </div>

              <h2>
                Recognition, competitions, and milestones.
              </h2>
            </div>

            <span className="section-count">
              03 AWARDS
            </span>
          </div>

          <div className="awards-list">

            <article className="award-row">
              <div className="award-year">
                2025
              </div>

              <div className="award-content">
                <p className="eyebrow">
                  GOOGLE INDONESIA
                </p>

                <h3>
                  Google Student Ambassador
                </h3>

                <p className="muted">
                  Selected as an official campus representative to support
                  student technology initiatives and digital talent development.
                </p>
              </div>

              <div className="award-mark">
                SELECTED
              </div>
            </article>


            <article className="award-row">
              <div className="award-year">
                2025
              </div>

              <div className="award-content">
                <p className="eyebrow">
                  COMPFEST · UNIVERSITAS INDONESIA
                </p>

                <h3>
                  Top 9 National Finalist
                </h3>

                <p className="muted">
                  Business Analysis category. Developed a data-backed business
                  strategy and case solution for a Smart Trolley concept.
                </p>
              </div>

              <div className="award-mark">
                TOP 9
              </div>
            </article>


            <article className="award-row">
              <div className="award-year">
                2025
              </div>

              <div className="award-content">
                <p className="eyebrow">
                  GAMMAFEST · IPB
                </p>

                <h3>
                  National Data Science Competition
                </h3>

                <p className="muted">
                  Competed in a national-level data science competition
                  focused on statistical analysis, predictive modeling,
                  and real-world datasets.
                </p>
              </div>

              <div className="award-mark">
                COMPETITOR
              </div>
            </article>

          </div>
        </section>


        {/* =====================================================
            ENGINEERING
        ====================================================== */}

        <section
          id="engineering"
          className="section container"
        >
          <div className="section-label">
            06 / ENGINEERING
          </div>

          <div className="engineering">
            <div>
              <p className="eyebrow">
                PRODUCTION WORKFLOW ARCHITECTURE
              </p>

              <h2>
                From interface to database.
              </h2>

              <p className="muted">
                My software work covers database migrations, backend models,
                workflow services, REST APIs, role-aware interfaces,
                integration testing, and UAT.
              </p>

              <div className="engineering-points">
                <span>
                  01&nbsp; Clear state transitions
                </span>

                <span>
                  02&nbsp; Role-aware interfaces
                </span>

                <span>
                  03&nbsp; Traceable data flow
                </span>
              </div>
            </div>

            <div className="architecture">
              <div>
                <small>01</small>
                React + TypeScript
              </div>

              <span>↓</span>

              <div>
                <small>02</small>
                REST API
              </div>

              <span>↓</span>

              <div>
                <small>03</small>
                Laravel
              </div>

              <span>↓</span>

              <div>
                <small>04</small>
                MySQL
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            HOW I WORK
        ====================================================== */}

        <section
          className="section principles-section container"
        >
          <div className="section-heading">
            <div>
              <div className="section-label">
                07 / HOW I WORK
              </div>

              <h2>
                Simple principles behind the work.
              </h2>
            </div>
          </div>

          <div className="principles-grid">
            {principles.map(([number, title, text]) => (
              <article
                className="principle"
                key={number}
              >
                <span>{number}</span>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>


        {/* =====================================================
            MORE EXPERIMENTS
        ====================================================== */}

        <section className="section container">
          <div className="section-heading">
            <div>
              <div className="section-label">
                08 / MORE EXPERIMENTS
              </div>

              <h2>
                Smaller builds, same curiosity.
              </h2>
            </div>

            <span className="section-count">
              {other.length.toString().padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="other-grid">
            {other.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>


        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section
          id="about"
          className="section container"
        >
          <div className="section-label">
            09 / ABOUT
          </div>

          <div className="about-grid">
            <div>
              <h2>
                Building things is how I learn.
              </h2>
            </div>

            <div>
              <p className="about-text">
                I’m Salma Nurfauziah, an Informatics Engineering graduate
                interested in Data Engineering, Machine Learning, and Software
                Engineering. I enjoy turning raw data, complex workflows, and
                technical problems into practical systems.
              </p>

              <div className="recognition">
                <div>
                  <span>2025</span>
                  <strong>
                    Google Student Ambassador
                  </strong>
                  <small>
                    Google Indonesia
                  </small>
                </div>

                <div>
                  <span>2025</span>
                  <strong>
                    Top 9 Finalist — CompFest
                  </strong>
                  <small>
                    Universitas Indonesia
                  </small>
                </div>

                <div>
                  <span>2025</span>
                  <strong>
                    GammaFest
                  </strong>
                  <small>
                    National Data Science Competition
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            STACK
        ====================================================== */}

        <section
          className="section container skills-section"
        >
          <div className="section-label">
            10 / STACK
          </div>

          <div className="skills-grid">
            <div>
              <span>DATA</span>
              <p>
                Python · SQL · Pandas · NumPy
              </p>
            </div>

            <div>
              <span>MACHINE LEARNING</span>
              <p>
                Scikit-Learn · XGBoost · Random Forest
              </p>
            </div>

            <div>
              <span>DEEP LEARNING</span>
              <p>
                PyTorch · CNN · RNN · LSTM · GRU
              </p>
            </div>

            <div>
              <span>SOFTWARE</span>
              <p>
                Laravel · React · TypeScript · MySQL · REST API
              </p>
            </div>

            <div>
              <span>ENGINEERING</span>
              <p>
                Git · GitLab · CI/CD · Testing · Agile
              </p>
            </div>

            <div>
              <span>OTHER</span>
              <p>
                OpenCV · Librosa · Power BI · GCP
              </p>
            </div>
          </div>
        </section>


        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section
          id="contact"
          className="contact section"
        >
          <div className="container contact-inner">
            <div className="section-label">
              11 / CONTACT
            </div>

            <h2>
              Have a problem worth building?
            </h2>

            <p className="contact-copy">
              Open to software engineering, data, and machine learning
              opportunities.
            </p>

            <a
              className="contact-email"
              href="mailto:salmanurfauziah2005@gmail.com"
            >
              salmanurfauziah2005@gmail.com
              <ArrowUpRight />
            </a>

            <div className="socials">
              <a
                href="https://github.com/slmaaanf"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/salmanurfauziah"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                href="mailto:salmanurfauziah2005@gmail.com"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="container footer">
        <span>
          © {new Date().getFullYear()} Salma Nurfauziah
        </span>

        <span>
          React · TypeScript · Vite
        </span>
      </footer>
    </div>
  );
}