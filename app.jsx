const { useState, useEffect } = React;

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "header", "about", "skills", "services", "projects", "testimonials", "contact"
      ];
      let current = "";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 80) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "header" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">MySite</div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`hover:text-blue-600 ${
                  activeSection === link.id ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block ${
                activeSection === link.id ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Header() {
return (
  <header
    id="header"
    className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1350&q=80')",
    }}
  >
    <div className="bg-black bg-opacity-60 p-8 rounded max-w-xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg md:text-xl mb-6">
        I’m a Web Developer specializing in modern, responsive apps.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded font-semibold">Hire Me</a>
        <a href="#projects" className="bg-white hover:bg-gray-200 text-blue-600 px-5 py-2 rounded font-semibold">View Projects</a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 text-xl">
        <a href="https://github.com/yourusername" target="_blank" className="hover:text-blue-400">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-blue-400">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </header>
);
}

function About() {
  const [showFull, setShowFull] = useState(false);

  const shortText = `I'm a passionate web developer with experience in building dynamic and responsive websites using React, Tailwind CSS, and modern tools. I specialize in creating user-friendly, high-performance applications that solve real-world problems and deliver excellent user experiences.`;

  const fullText = shortText + " I am also experienced in backend technologies, managing databases, and deploying full-stack projects. My goal is to build meaningful digital solutions that make an impact.";

  return (
    <section id="about" className="py-16 px-4 bg-white text-gray-800" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./masudrana.png"
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            {showFull ? fullText : shortText}
          </p>
          {!showFull && (
            <button
              onClick={() => setShowFull(true)}
              className="text-blue-600 hover:underline font-medium"
            >
              See More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: "HTML", icon: "fa-brands fa-html5", color: "text-orange-600" },
    { name: "CSS", icon: "fa-brands fa-css3-alt", color: "text-blue-600" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-500" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "text-purple-600" },
    { name: "Tailwind", icon: "fa-solid fa-wind", color: "text-sky-400" },
    { name: "React", icon: "fa-brands fa-react", color: "text-cyan-500" },
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "text-green-600" },
    { name: "Firebase", icon: "fa-solid fa-fire", color: "text-orange-500" }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center bg-gray-50 p-5 rounded-lg shadow-md w-28 transform transition duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-xl" data-aos="zoom-in" data-aos-delay={idx * 100}>
            <i className={`${skill.icon} text-3xl ${skill.color} mb-2 transition-transform duration-300`}></i>
            <p className="text-gray-800 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Web Design", desc: "Modern UI/UX design with mobile-first approach." },
          { title: "Web Development", desc: "Full-stack development using React and Firebase." },
          { title: "SEO", desc: "Optimize websites for search engines and performance." }
        ].map((service, idx) => (
          <div key={idx} className="bg-blue-100 text-blue-800 p-6 rounded shadow-md" data-aos="zoom-in-right" data-aos-delay={idx * 100}>
            <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
            <p className="text-gray-700 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "https://via.placeholder.com/400x250?text=Portfolio",
      description: "A personal portfolio to showcase my projects and skills."
    },
    {
      title: "Movie Streaming Site",
      image: "https://via.placeholder.com/400x250?text=Movie+Site",
      description: "A responsive movie streaming site built with Firebase."
    },
    {
      title: "Social Media App",
      image: "https://via.placeholder.com/400x250?text=Social+App",
      description: "A social media platform with posts, likes, and comments."
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden" data-aos="zoom-in-left" data-aos-delay={idx * 100}>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  React.useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      quote: "This service is amazing! Highly recommend to everyone.",
      image: "https://i.pravatar.cc/100?img=1",
      rating: 5
    },
    {
      name: "Jane Smith",
      quote: "Top-notch experience and incredible support.",
      image: "https://i.pravatar.cc/100?img=2",
      rating: 4
    },
    {
      name: "Alex Johnson",
      quote: "Great work! Would definitely collaborate again.",
      image: "https://i.pravatar.cc/100?img=3",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fa-star ${
          i < rating ? "fas text-yellow-400" : "far text-gray-300"
        }`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Testimonials</h2>
      <div className="swiper max-w-xl mx-auto">
        <div className="swiper-wrapper">
          {testimonials.map((t, idx) => (
            <div key={idx} className="swiper-slide p-6 bg-white rounded-lg shadow" data-aos="zoom-out" data-aos-delay={idx * 100}>
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 italic mb-2">"{t.quote}"</p>
              <div className="mb-2">{renderStars(t.rating)}</div>
              <h4 className="mt-2 font-semibold text-blue-600">{t.name}</h4>
            </div>
          ))}
        </div>
        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 text-center" data-aos="fade-in">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white text-center py-4 shadow-inner">
      <p className="text-gray-600">&copy; 2025 MySite. All rights reserved.</p>
    </footer>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
