import React, { useState, useEffect } from 'react';
import './App.css';

// Import images from src/images folder
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Dummy data with image assignments
  const testimonials = [
    {
      name: "Amara Silva",
      age: 28,
      text: "MindBodyBalance helped me understand how my hormones were affecting my mood. The stress management tools are life-changing!",
      rating: 5,
      image: image2
    },
    {
      name: "Kavindi Rajapaksa",
      age: 35,
      text: "Finally found mental health professionals who truly understand women's unique challenges. The community support is incredible.",
      rating: 5,
      image: image3
    },
    {
      name: "Nishani Wickramasinghe",
      age: 24,
      text: "The hormone-mood tracker opened my eyes to patterns I never noticed. Now I can prepare for difficult days ahead.",
      rating: 5,
      image: image4
    }
  ];

  const professionals = [
    {
      name: "Dr. Priyanga Perera",
      specialty: "Women's Mental Health",
      experience: "15 years",
      approach: "Holistic, Hormone-focused",
      rating: 4.9,
      location: "Colombo 07",
      image: image2
    },
    {
      name: "Dr. Sanduni Fernando",
      specialty: "Reproductive Psychology",
      experience: "12 years",
      approach: "CBT, Mindfulness",
      rating: 4.8,
      location: "Kandy",
      image: image3
    },
    {
      name: "Dr. Malsha Jayasinghe",
      specialty: "Body Image & Wellness",
      experience: "10 years",
      approach: "Body-positive, Trauma-informed",
      rating: 4.9,
      location: "Galle",
      image: image4
    }
  ];

  const stressTools = [
    {
      title: "5-Minute Breathing Exercise",
      description: "Quick breathing technique for immediate stress relief",
      duration: "5 mins",
      type: "Breathing"
    },
    {
      title: "Body Scan Meditation", 
      description: "Progressive relaxation to release physical tension",
      duration: "15 mins",
      type: "Meditation"
    },
    {
      title: "Hormone-Mood Journal",
      description: "Track patterns between your cycle and emotional state", 
      duration: "Daily",
      type: "Tracking"
    },
    {
      title: "Self-Compassion Practice",
      description: "Building a kinder relationship with yourself",
      duration: "10 mins", 
      type: "Mindfulness"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const Navigation = () => (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="logo">
            <i className="fas fa-heart"></i>
          </div>
          <span className="brand-text">MindBodyBalance</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="nav-menu">
          {['home', 'tools', 'professionals', 'about'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`nav-link ${currentPage === page ? 'active' : ''}`}
            >
              {page === 'professionals' ? 'Find Help' : page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu active">
          {['home', 'tools', 'professionals', 'about'].map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setIsMenuOpen(false);
              }}
              className={`nav-link mobile ${currentPage === page ? 'active' : ''}`}
            >
              {page === 'professionals' ? 'Find Help' : page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="page active">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Your Mind & Body <span className="gradient-text">Deserve Balance</span></h1>
              <p>Empowering women to understand the connection between mental and physical health. Find tools, community, and professional support tailored specifically for you.</p>
              <div className="hero-buttons">
                <button 
                  onClick={() => setCurrentPage('tools')}
                  className="btn btn-primary"
                >
                  Explore Tools <i className="fas fa-arrow-right"></i>
                </button>
                <button 
                  onClick={() => setCurrentPage('professionals')}
                  className="btn btn-secondary"
                >
                  Find Support
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-container">
                <img 
                  src={image1} 
                  alt="Sri Lankan woman practicing wellness" 
                  className="hero-main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Understanding Your Unique Journey</h2>
            <p>Women's health is complex and interconnected. We provide the tools and knowledge to help you navigate your mental and physical wellness with confidence.</p>
          </div>
          <div className="features-grid">
            <div className="feature-item pink">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Hormone-Mood Connection</h3>
              <p>Learn how hormonal changes throughout your cycle affect your mental state and develop strategies to manage these natural fluctuations.</p>
            </div>
            <div className="feature-item purple">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Body Image Support</h3>
              <p>Build a healthier relationship with your body through evidence-based techniques and supportive community resources.</p>
            </div>
            <div className="feature-item indigo">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Expert Connections</h3>
              <p>Connect with mental health professionals who specialize in women's unique challenges and understand your experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>Stories of Transformation</h2>
          <div className="testimonial-card">
            <div className="testimonial-profile">
              <img 
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="testimonial-avatar"
              />
              <div className="stars">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
            <blockquote>
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="testimonial-author">
              <div className="author-name">{testimonials[currentTestimonial].name}</div>
              <div className="author-age">Age {testimonials[currentTestimonial].age}</div>
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ToolsPage = () => (
    <div className="page active">
      <div className="container">
        <div className="page-header">
          <h1>Wellness Tools & Resources</h1>
          <p>Evidence-based tools designed specifically for women's mental and physical health needs. Start your journey to better balance today.</p>
        </div>

        <div className="tools-grid">
          {stressTools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-header">
                <h3>{tool.title}</h3>
                <span className="tool-type">{tool.type}</span>
              </div>
              <p>{tool.description}</p>
              <div className="tool-footer">
                <span className="duration">Duration: {tool.duration}</span>
                <button className="btn btn-small">Start Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Mood Tracker */}
        <div className="mood-tracker">
          <h2>Hormone-Mood Tracker</h2>
          <p>Track your mood patterns throughout your cycle to better understand your mental health fluctuations.</p>
          
          <div className="tracker-grid">
            {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, index) => (
              <div key={week} className="tracker-week">
                <h4>{week}</h4>
                <div className="mood-emoji">
                  {index === 0 ? '😌' : index === 1 ? '😊' : index === 2 ? '😔' : '😴'}
                </div>
                <p>
                  {index === 0 ? 'Calm' : index === 1 ? 'Energetic' : index === 2 ? 'Moody' : 'Tired'}
                </p>
                <button className="log-btn">Log Today</button>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Resources */}
        <div className="educational-resources">
          <h2>Educational Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h4>Understanding Your Cycle</h4>
              <p>Learn how hormonal changes affect your mood, energy, and overall well-being.</p>
              <button className="resource-link">Read Article →</button>
            </div>
            <div className="resource-card">
              <h4>Stress & Women's Health</h4>
              <p>Discover the unique ways stress affects women and evidence-based coping strategies.</p>
              <button className="resource-link">Read Article →</button>
            </div>
            <div className="resource-card">
              <h4>Body Image & Self-Care</h4>
              <p>Build a healthier relationship with your body through mindful practices.</p>
              <button className="resource-link">Read Article →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProfessionalsPage = () => (
    <div className="page active">
      <div className="container">
        <div className="page-header">
          <h1>Find Female-Friendly Mental Health Professionals</h1>
          <p>Connect with mental health professionals who understand women's unique challenges and specialize in the mind-body connection.</p>
        </div>

        {/* Search Filters */}
        <div className="search-filters">
          <div className="filter-group">
            <label>Location</label>
            <input type="text" placeholder="City, Province" />
          </div>
          <div className="filter-group">
            <label>Specialty</label>
            <select>
              <option>All Specialties</option>
              <option>Women's Mental Health</option>
              <option>Reproductive Psychology</option>
              <option>Body Image</option>
              <option>Hormone-Related Issues</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Insurance</label>
            <select>
              <option>All Insurance</option>
              <option>Accepts NHIF</option>
              <option>Private Insurance</option>
              <option>Self-Pay</option>
            </select>
          </div>
          <div className="filter-group">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        {/* Professional Listings */}
        <div className="professionals-list">
          {professionals.map((prof, index) => (
            <div key={index} className="professional-card">
              <div className="prof-photo">
                <img 
                  src={prof.image}
                  alt={prof.name}
                  className="doctor-avatar"
                />
              </div>
              <div className="prof-info">
                <div className="prof-header">
                  <div>
                    <h3>{prof.name}</h3>
                    <p className="specialty">{prof.specialty}</p>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>{prof.rating}</span>
                  </div>
                </div>
                <div className="prof-details">
                  <div className="detail">
                    <i className="fas fa-map-marker-alt"></i>
                    {prof.location}
                  </div>
                  <div className="detail">
                    <strong>Experience:</strong> {prof.experience}
                  </div>
                  <div className="detail">
                    <strong>Approach:</strong> {prof.approach}
                  </div>
                </div>
              </div>
              <div className="prof-features">
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  Women's Health Focus
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  Telehealth Available
                </div>
                <div className="feature">
                  <i className="fas fa-check-circle"></i>
                  New Patients Welcome
                </div>
              </div>
              <div className="prof-actions">
                <button className="btn btn-primary">Book Consultation</button>
                <button className="btn btn-secondary">View Profile</button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Resources */}
        <div className="emergency-resources">
          <h3>Need Immediate Help?</h3>
          <p>If you're experiencing a mental health emergency, please reach out immediately:</p>
          <ul>
            <li>National Mental Health Helpline: <strong>1926</strong></li>
            <li>Sumithrayo (Suicide Prevention): <strong>011-2692909</strong></li>
            <li>Women's Helpline: <strong>1938</strong></li>
            <li>Police Emergency: <strong>119</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="page active">
      <div className="container">
        <div className="page-header">
          <h1>About MindBodyBalance</h1>
          <p>Empowering Sri Lankan women to understand and nurture the intricate connection between mental and physical health through evidence-based tools, culturally sensitive approaches, and compassionate support.</p>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>We believe every Sri Lankan woman deserves to understand her unique mind-body connection. Our platform provides culturally sensitive tools, education, and professional connections needed to navigate the complex relationship between hormones, emotions, and overall wellness with confidence and support in the Sri Lankan context.</p>
        </div>

        {/* Why We Exist */}
        <div className="why-exist">
          <h2>Why We Exist</h2>
          <div className="exist-grid">
            <div className="exist-card pink-border">
              <h3>The Gap in Sri Lankan Women's Healthcare</h3>
              <p>In Sri Lanka, women's mental health has often been misunderstood or dismissed due to cultural stigma. The unique ways hormones affect mood, the impact of the menstrual cycle on mental health, and the intersection of body image with overall wellness have been overlooked in our traditional healthcare system.</p>
            </div>
            <div className="exist-card purple-border">
              <h3>Our Solution</h3>
              <p>MindBodyBalance bridges this gap by providing culturally sensitive tools, educational resources, and connections to professionals who understand Sri Lankan women's unique health challenges. We're creating a safe space where Sri Lankan women can find the support they deserve.</p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="what-we-offer">
          <h2>What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-item">
              <div className="offer-icon pink">
                <i className="fas fa-brain"></i>
              </div>
              <h4>Evidence-Based Tools</h4>
              <p>Scientifically-backed stress management, mood tracking, and wellness tools designed specifically for women.</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon purple">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4>Educational Resources</h4>
              <p>Comprehensive information about the hormone-mood connection, cycle awareness, and body-positive wellness approaches.</p>
            </div>
            <div className="offer-item">
              <div className="offer-icon indigo">
                <i className="fas fa-user-md"></i>
              </div>
              <h4>Professional Network</h4>
              <p>Carefully curated directory of mental health professionals across Sri Lanka who specialize in women's unique health challenges and understand our cultural context.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Us</h4>
                <p>support@mindbodybalance.lk</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Call Us</h4>
                <p>+94 11 234 5678</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Visit Us</h4>
                <p>No. 123, Galle Road<br />Colombo 04, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'tools':
        return <ToolsPage />;
      case 'professionals':
        return <ProfessionalsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Navigation />
      {renderCurrentPage()}
    </div>
  );
};

export default App;