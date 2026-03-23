import React from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(React.createElement);

const features = [
  {
    icon: '📘',
    title: 'Learn Anything',
    description: 'A range of courses across gardening, photography and more.',
    tint: 'feature-card amber',
  },
  {
    icon: '🔗',
    title: 'Flexible Learning',
    description: 'Knowledge discovery that helps you understand any topic.',
    tint: 'feature-card violet',
  },
  {
    icon: '🧑‍🏫',
    title: 'Learn With Experts',
    description: 'Experts deliver the best support regarding your next step.',
    tint: 'feature-card mint',
  },
];

const courses = [
  {
    category: 'Software Engineering',
    title: 'Java Programming and Software Engineering Fundamentals',
    rating: '4.0',
    reviews: '10',
    lessons: '14',
    duration: '4h 5m',
    price: '$415',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Personal Development',
    title: 'Learn Figma: User Interface Design Essentials UI/UX Design',
    rating: '5.9',
    reviews: '21',
    lessons: '10',
    duration: '4h 44m',
    price: '$489',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'App Development',
    title: 'The Complete JavaScript Course 2020: Build Real Projects!',
    rating: '3.7',
    reviews: '13',
    lessons: '12',
    duration: '35 week',
    price: '$419',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Designing',
    title: 'Open Source Software Development, Linux and Git',
    rating: '3.6',
    reviews: '8',
    lessons: '18',
    duration: '3h 50m',
    price: '$129',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Photography',
    title: 'Digital Signal Processing: Analog vs Digital',
    rating: '4.6',
    reviews: '22',
    lessons: '22',
    duration: '6h 40m',
    price: '$569',
    image:
      'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'JavaScript',
    title: 'Developing Android Apps with App Inventor',
    rating: '4.0',
    reviews: '17',
    lessons: '30',
    duration: '6h 21m',
    price: '$415',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
  },
];

const renderStars = () => '★★★★★';

function App() {
  return html`
    <div className="page-shell">
      <section className="hero">
        <header className="navbar container">
          <div className="brand">edumodo</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <span className="nav-icon">◌</span>
            <span className="nav-icon">👜</span>
          </nav>
        </header>

        <div className="hero-body container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">online education</p>
            <h1>More Than 500 <span>Online Courses</span></h1>
            <p className="hero-text">An investment in knowledge pays the best interest.</p>
            <div className="hero-actions">
              <button type="button" className="primary-btn">Explore Courses</button>
              <button type="button" className="ghost-btn">View Plans</button>
            </div>
          </div>

          <div className="hero-illustration" aria-hidden="true">
            <div className="plant left"></div>
            <div className="plant right"></div>
            <div className="sofa">
              <div className="sofa-seat"></div>
              <div className="student">
                <div className="hair"></div>
                <div className="face"></div>
                <div className="body"></div>
                <div className="laptop"></div>
                <div className="leg left"></div>
                <div className="leg right"></div>
              </div>
              <div className="bubble one"></div>
              <div className="bubble two"></div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="section container about" id="about">
          <div className="section-heading">
            <h2>Why Study With Skola</h2>
            <p>Discover your perfect program in our courses.</p>
          </div>

          <div className="feature-grid">
            ${features.map(
              (feature) => html`
                <article className=${feature.tint} key=${feature.title}>
                  <div className="feature-icon">${feature.icon}</div>
                  <h3>${feature.title}</h3>
                  <p>${feature.description}</p>
                </article>
              `,
            )}
          </div>
        </section>

        <section className="section container courses" id="courses">
          <div className="section-heading">
            <h2>Popular Courses</h2>
            <p>Discover your perfect program in our courses.</p>
          </div>

          <div className="course-grid">
            ${courses.map(
              (course) => html`
                <article className="course-card" key=${course.title}>
                  <img src=${course.image} alt=${course.title} />
                  <div className="course-content">
                    <p className="course-category">${course.category}</p>
                    <h3>${course.title}</h3>
                    <div className="course-rating">
                      <span className="stars">${renderStars()}</span>
                      <span>${course.rating} (${course.reviews} reviews)</span>
                    </div>
                    <div className="course-meta">
                      <span>📘 ${course.lessons} lessons</span>
                      <span>🕒 ${course.duration}</span>
                      <strong>${course.price}</strong>
                    </div>
                  </div>
                </article>
              `,
            )}
          </div>
        </section>

        <section className="section app-cta">
          <div className="container compact">
            <div className="section-heading">
              <h2>Get Our App On</h2>
              <p>Download the app from both Play and App Store.</p>
            </div>
            <div className="store-buttons">
              <a href="https://play.google.com" className="store-btn" target="_blank" rel="noreferrer">
                <span className="store-logo">▶</span>
                <span>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </span>
              </a>
              <a href="https://apple.com/app-store" className="store-btn" target="_blank" rel="noreferrer">
                <span className="store-logo"></span>
                <span>
                  <small>Download on the</small>
                  <strong>Apple Store</strong>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">edumodo</div>
            <p>
              Skola is an educational site which gives various courses regarding your need. It provides more than 500
              international courses to prove your skills.
            </p>
          </div>

          <div>
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
            <p>1900 654 321</p>
            <p>support@skola.com</p>
          </div>

          <div>
            <div className="payment-card">
              <div>VISA</div>
              <div>Mastercard</div>
              <div>PayPal</div>
              <div>Stripe</div>
              <div>Apple Pay</div>
              <div>Google Pay</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `;
}

createRoot(document.getElementById('root')).render(html`<${App} />`);
