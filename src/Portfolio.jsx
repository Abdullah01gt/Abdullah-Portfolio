import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Server, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';



export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Vue.js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js', 'Java Servlets', 'JSP', 'PHP'],
    Databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
    Languages: ['Java', 'Python', 'C', 'PHP', 'JavaScript'],
    'Tools & DevOps': ['Git', 'GitHub', 'Bash Scripting', 'Linux / Ubuntu OS']
  };

  const projects = [
    {
      title: 'Online Vehicle Rental System',
      badge: 'Full Stack / MERN',
      description:
        'A comprehensive vehicle rental platform featuring dynamic fleet listings, secure booking workflows, and responsive UI.',
      highlights: [
        'Implemented React Context API for global state & seamless user authentication.',
        'Integrated Razorpay Payment Gateway for real-time secure online transactions.',
        'Connected Cloudinary API for optimized image uploads and cloud asset delivery.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Cloudinary']
    },
    {
      title: 'Dynamic Invoice Generator',
      badge: 'Frontend / Tooling',
      description:
        'A dynamic web application allowing businesses and freelancers to generate, calculate, preview, and download custom formatted invoices instantly.',
      highlights: [
        'Engineered dynamic forms for line-item additions, tax calculation, and discounts.',
        'Integrated React-PDF Renderer for one-click high-fidelity PDF invoice exports.',
        'Built responsive live-preview interface with client-side state caching.'
      ],
      tech: ['React.js', 'React-PDF Renderer', 'Tailwind CSS', 'JavaScript']
    }
  ];

  const experience = [
    {
      role: 'WordPress Developer Intern',
      company: 'One Idea Lab',
      location: 'Thanjavur',
      period: 'Aug 2025 – Nov 2025',
      points: [
        'Designed and developed interactive web application prototypes using WordPress.',
        'Created, mapped, and tested end-user workflows to optimize digital user conversion paths.'
      ]
    },
    {
      role: 'Java Full-Stack Intern',
      company: 'Facilio',
      location: 'Guindy I.E, Chennai',
      period: 'Apr 2025 – Jun 2025',
      points: [
        'Engineered a Hotel Reservation system utilizing Java OOP, Servlets, and JSP on the backend with MySQL and modern Frontend technologies.',
        'Operated directly within Ubuntu Linux production environments for server setup and deployments.',
        'Wrote custom Bash automation scripts for server process management, error auditing, and routine tasks.'
      ]
    }
  ];

  const education = [
    {
      degree: 'IIT-M Certified Full Stack Development',
      institution: 'HCL – Guvi Enterprise, Chennai',
      period: '2026',
      detail: 'AI-Integrated MERN Stack Development Certification'
    },
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Mohamed Sathak Engineering College, Kilakarai',
      period: '2021 – 2025',
      detail: 'CGPA: 7.78 / 10'
    },
    {
      degree: 'Higher Secondary Education (HSC & SSLC)',
      institution: 'Mohamed Sathak Dastagir Matric Hr Sec School, Ramanathapuram',
      period: '2020',
      detail: 'HSC (12th): 70% | SSLC (10th): 83.2%'
    }
  ];

  const certifications = [
    { title: 'AI-Integrated Full Stack Development', issuer: 'IIT-M & HCL GUVI' },
    { title: 'MERN Stack Web Development Bootcamp', issuer: 'Dr. Angela Yu (Udemy)' },
    { title: 'Git & GitHub Masterclass', issuer: 'Academind (Udemy)' },
    { title: 'Complete Python Programming Masterclass', issuer: 'Jose Portilla (Udemy)' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            ABDULLAH<span className="text-indigo-500">.dev</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
            <a href="#education" className="hover:text-indigo-400 transition">Education</a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-lg shadow-indigo-500/20"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
            {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-indigo-400 capitalize text-sm font-medium py-1"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-36 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for Full-Time Opportunities
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">Abdullah</span>.
        </h1>
        
        <h2 className="text-2xl sm:text-3xl text-slate-300 font-semibold mb-6">
          MERN Stack & Full-Stack Web Developer
        </h2>

        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
          Motivated and detail-oriented developer specializing in building scalable web applications with React, Node.js, Express, and modern SQL/NoSQL databases. Passionate about clean code, intuitive architectures, and delivering high user value.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/30 flex items-center gap-2"
          >
            <Mail size={18} /> Get In Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition border border-slate-700 flex items-center gap-2"
          >
            View Projects <ChevronRight size={18} />
          </a>
        </div>

        {/* Quick Contact Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <Mail className="text-indigo-400" size={18} />
            <a href="mailto:abdexe25@gmail.com" className="hover:text-white transition">abdexe25@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-indigo-400" size={18} />
            <a href="tel:+917538858217" className="hover:text-white transition">+91 7538858217</a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-indigo-400" size={18} />
            <span>Ramanathapuram, Tamil Nadu</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">Capabilities</h2>
            <h3 className="text-3xl font-bold text-white">Technical Skills & Arsenal</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, list], index) => (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/40 transition duration-300 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category === 'Frontend' && <Code2 className="text-indigo-400" size={22} />}
                  {category === 'Backend' && <Server className="text-cyan-400" size={22} />}
                  {category === 'Databases' && <Database className="text-emerald-400" size={22} />}
                  {category === 'Languages' && <Terminal className="text-amber-400" size={22} />}
                  {category === 'Tools & DevOps' && <Terminal className="text-purple-400" size={22} />}
                  <h4 className="text-lg font-semibold text-slate-100">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">Portfolio</h2>
          <h3 className="text-3xl font-bold text-white">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-slate-700 transition shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                    {project.badge}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2 mb-6">
                  {project.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-1 bg-slate-950 text-indigo-300 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-slate-900/50 border-y border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">Work History</h2>
            <h3 className="text-3xl font-bold text-white">Internships & Hands-On Experience</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-4 before:w-0.5 before:bg-slate-800">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                <div className="absolute left-1.5 md:left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-slate-950 -translate-x-1/2"></div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <span className="text-xs font-mono text-indigo-400 px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-300 mb-4">
                    {exp.company} • <span className="text-slate-400">{exp.location}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Grid */}
      <section id="education" className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-indigo-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                  <span className="text-xs font-mono text-indigo-400">{edu.period}</span>
                  <h4 className="text-lg font-bold text-white mt-1">{edu.degree}</h4>
                  <p className="text-sm text-slate-300 mt-1">{edu.institution}</p>
                  <p className="text-xs font-medium text-emerald-400 mt-2">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-indigo-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-5 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-semibold text-white">{cert.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
                  </div>
                  <Award className="text-slate-700" size={20} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">Get Connected</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Let's Build Something Together</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-sm sm:text-base">
            I am eager to contribute my skills in full-stack web development and database management to forward-thinking teams. Feel free to reach out directly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:abdexe25@gmail.com"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/30 flex items-center gap-2"
            >
              <Mail size={18} /> abdexe25@gmail.com
            </a>
            <a
              href="tel:+917538858217"
              className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition border border-slate-700 flex items-center gap-2"
            >
              <Phone size={18} /> +91 7538858217
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Abdullah. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}