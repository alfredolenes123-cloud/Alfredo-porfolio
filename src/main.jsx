import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, Code2, Database, Layers3, Mail, MapPin,
  Download, CheckCircle2, Braces, Server, MonitorSmartphone, Users2, Sparkles
} from 'lucide-react';
import './styles.css';

const skills = [
  'C#', '.NET 8', '.NET Core', '.NET Framework', 'WPF', 'XAML', 'MVVM',
  'WinForms', 'ASP.NET MVC', 'Entity Framework', 'REST APIs', 'SOAP',
  'SQL Server', 'T-SQL', 'Oracle', 'PostgreSQL', 'SSIS', 'Azure DevOps',
  'Git', 'Bitbucket', 'Jira', 'TeamCity'
];

const experience = [
  {
    company: 'Stefanini Group',
    role: 'Senior Software Developer · Technical Lead',
    period: 'Aug 2022 — Present',
    bullets: [
      'Technical leadership, solution design and architecture decisions.',
      'Code reviews through Pull Requests and engineering best practices.',
      'Developer mentoring and technical guidance.',
      'Enterprise software development with C#, .NET 8, WPF, XAML and WinForms.',
      'REST/SOAP integrations, SQL Server, Azure DevOps and Git.'
    ]
  },
  {
    company: 'Intergrupo SoftwareOne',
    role: 'Software Development Engineer',
    period: 'Dec 2019 — Aug 2022',
    bullets: [
      'Built and maintained enterprise applications using C#, .NET, ASP.NET and MVC.',
      'Developed WPF/XAML components and integrations with REST and SOAP services.',
      'Worked with SQL Server, Oracle, Entity Framework and SSIS.',
      'Participated across analysis, development, testing and maintenance.'
    ]
  },
  {
    company: 'Superefectivo',
    role: 'Software Developer / Service Desk Support',
    period: 'Mar 2015 — Jul 2019',
    bullets: [
      'Developed desktop applications with C#, .NET, WinForms and Entity Framework.',
      'Maintained VB6 solutions and SQL Server/PostgreSQL databases.',
      'Supported business applications and end-user technology incidents.'
    ]
  }
];

const projects = [
  {
    icon: MonitorSmartphone,
    tag: 'PERSONAL PROJECT',
    title: 'FitSnap',
    text: 'Mobile fitness concept focused on AI-assisted meal recognition, recipes, workouts and nearby gyms.',
    stack: ['.NET MAUI', 'C#', 'AI', 'Mobile'],
    accent: 'violet'
  },
  {
    icon: Server,
    tag: 'FULL STACK',
    title: 'E-Commerce Platform',
    text: 'Modern shop application with an Angular frontend and a .NET Web API backend, including product CRUD and API integration.',
    stack: ['Angular', '.NET Web API', 'C#', 'REST'],
    accent: 'cyan'
  },
  {
    icon: Braces,
    tag: 'SPECIALTY',
    title: 'Enterprise Desktop Solutions',
    text: 'Desktop application architecture and development using WPF, XAML, MVVM and Windows Forms for enterprise environments.',
    stack: ['WPF', 'XAML', 'MVVM', '.NET'],
    accent: 'blue'
  }
];

function App() {
  return (
    <div className="app-shell">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand">AL<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="mini-cta" href="/Alfredo_Lenes_CV_English.pdf" target="_blank" rel="noreferrer">
            CV <ArrowUpRight size={15}/>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"/> Available for remote opportunities</div>
            <h1>
              Alfredo Lenes
              <span>Senior .NET Developer</span>
              <span className="muted-line">& Technical Lead</span>
            </h1>
            <p className="hero-text">
              I build reliable enterprise software with <strong>C#</strong>, <strong>.NET</strong>, desktop technologies and APIs — combining hands-on engineering with technical leadership.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View my work <ArrowUpRight size={18}/></a>
              <a className="btn ghost" href="/Alfredo_Lenes_CV_English.pdf" download><Download size={17}/> Download CV</a>
            </div>
            <div className="quick-info">
              <span><MapPin size={16}/> Barranquilla, Colombia · Remote</span>
              <span><Mail size={16}/> alfredolenes@hotmail.com</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="code-card">
              <div className="window-bar"><i/><i/><i/><span>profile.cs</span></div>
              <pre><code><span className="kw">public class</span> <span className="type">Developer</span> {'{'}\n  <span className="prop">Experience</span> = <span className="str">"12+ years"</span>;\n  <span className="prop">Focus</span> = <span className="str">".NET & Enterprise"</span>;\n  <span className="prop">Specialty</span> = <span className="str">"WPF / XAML"</span>;\n  <span className="prop">Role</span> = <span className="str">"Technical Lead"</span>;\n  <span className="prop">English</span> = <span className="str">"B2"</span>;\n{'}'}</code></pre>
            </div>
            <div className="metric-grid">
              <div><strong>12+</strong><span>Years experience</span></div>
              <div><strong>3</strong><span>Core companies</span></div>
              <div><strong>.NET</strong><span>Main ecosystem</span></div>
              <div><strong>WPF</strong><span>Desktop specialty</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section container split-section">
          <div>
            <div className="section-label">01 / ABOUT</div>
            <h2>Enterprise engineering with a leadership mindset.</h2>
          </div>
          <div className="about-copy">
            <p>
              I'm a Senior Software Developer and Technical Lead with 12+ years of experience developing, maintaining and evolving enterprise software solutions.
            </p>
            <p>
              My strongest area is the .NET ecosystem, especially C#, WPF, XAML, MVVM, WinForms, APIs and SQL Server. Today I combine development with technical analysis, solution design, code review, mentoring and engineering standards.
            </p>
            <div className="about-points">
              <span><CheckCircle2 size={17}/> Enterprise applications</span>
              <span><CheckCircle2 size={17}/> Technical leadership</span>
              <span><CheckCircle2 size={17}/> Desktop development</span>
              <span><CheckCircle2 size={17}/> API integrations</span>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="section-head">
            <div>
              <div className="section-label">02 / EXPERTISE</div>
              <h2>What I bring to a software team.</h2>
            </div>
          </div>
          <div className="services-grid">
            <article className="service-card"><Code2/><h3>Software Development</h3><p>Enterprise-grade solutions with C# and the modern .NET ecosystem.</p></article>
            <article className="service-card"><MonitorSmartphone/><h3>Desktop Engineering</h3><p>Deep experience with WPF, XAML, MVVM and Windows Forms.</p></article>
            <article className="service-card"><Layers3/><h3>Architecture & Analysis</h3><p>Technical analysis, solution design and maintainable application structures.</p></article>
            <article className="service-card"><Users2/><h3>Technical Leadership</h3><p>Code reviews, mentoring, development standards and technical decision-making.</p></article>
            <article className="service-card"><Server/><h3>APIs & Integrations</h3><p>REST, SOAP, Web APIs and service-based enterprise integrations.</p></article>
            <article className="service-card"><Database/><h3>Data & DevOps</h3><p>SQL Server, Oracle, PostgreSQL, Azure DevOps, Git and delivery workflows.</p></article>
          </div>
        </section>

        <section className="section container">
          <div className="section-label">03 / STACK</div>
          <div className="stack-cloud">
            {skills.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-head">
            <div><div className="section-label">04 / EXPERIENCE</div><h2>Career timeline.</h2></div>
          </div>
          <div className="timeline">
            {experience.map((item, idx) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker"><span>{String(idx + 1).padStart(2,'0')}</span></div>
                <div className="timeline-main">
                  <div className="timeline-title-row">
                    <div><h3>{item.company}</h3><p className="role">{item.role}</p></div>
                    <span className="period">{item.period}</span>
                  </div>
                  <ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head">
            <div><div className="section-label">05 / PROJECTS</div><h2>Selected work & concepts.</h2></div>
            <span className="subtle-note">A mix of professional strengths and personal projects.</span>
          </div>
          <div className="projects-grid">
            {projects.map(({icon: Icon, tag, title, text, stack, accent}) => (
              <article className={`project-card ${accent}`} key={title}>
                <div className="project-top"><span>{tag}</span><Icon/></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="project-stack">{stack.map(s => <span key={s}>{s}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section container education-grid">
          <div className="edu-card">
            <div className="section-label">06 / EDUCATION</div>
            <h3>Software Engineering</h3>
            <p>Corporación Universitaria Minuto de Dios (UNIMINUTO)</p>
            <span>2026 — Present · In progress</span>
          </div>
          <div className="edu-card">
            <div className="section-label">CERTIFICATION PATH</div>
            <h3>Software Programming</h3>
            <p>SENA</p>
            <span>2014 — 2015</span>
          </div>
          <div className="edu-card">
            <div className="section-label">LANGUAGES</div>
            <h3>Spanish · Native</h3>
            <p>English · B2</p>
            <span>Professional communication</span>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <div className="contact-card">
            <div className="contact-glow"/>
            <div className="section-label">07 / CONTACT</div>
            <h2>Let's build something that lasts.</h2>
            <p>I'm open to senior .NET, WPF/XAML and technical leadership opportunities, especially remote roles and international teams.</p>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:alfredolenes@hotmail.com"><Mail size={18}/> Send email</a>
              <a className="btn ghost" href="https://www.linkedin.com/in/alfredolenes/" target="_blank" rel="noreferrer"><ArrowUpRight size={18}/> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 Alfredo Lenes González</span>
        <span>Built for the .NET ecosystem <Sparkles size={14}/></span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
