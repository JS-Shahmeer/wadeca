import { useRef, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

const navigation = ['About', 'Events', 'Programs', 'Students', 'Advisors', 'Support'];

const involvementCards = [
  {
    title: "I'm a student",
    description: 'Find competitions, scholarships, leadership opportunities, and resources.',
    image: 'https://images.pexels.com/photos/30419718/pexels-photo-30419718.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tone: 'student-card',
  },
  {
    title: "I'm a parent",
    description: 'Understand what DECA is, why it matters, and how your student can join.',
    image: 'https://images.pexels.com/photos/28375869/pexels-photo-28375869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tone: 'parent-card',
  },
  {
    title: "I'm an advisor",
    description: 'Access registration, membership, classroom tools, deadlines, and support.',
    image: 'https://images.pexels.com/photos/5622367/pexels-photo-5622367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tone: 'advisor-card',
  },
  {
    title: "I'm a partner",
    description: 'Support the next generation of business leaders and give back to your community.',
    tone: 'partner-card',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const involvementSlider = useRef<HTMLDivElement>(null);

  const moveInvolvementSlider = (direction: number): void => {
    involvementSlider.current?.scrollBy({ left: direction * 338, behavior: 'smooth' });
  };

  return (
    <main className="home-page">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="DECA home">
          <span className="brand-mark" aria-hidden="true">◇</span>
          <span className="brand-copy"><small>PREPARING EMERGING</small>DECA</span>
        </a>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary">
          {navigation.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
        </nav>

        <div className="header-actions">
          <a className="involvement-link" href="#involved">Get Involved</a>
          <button className="icon-button search-button" type="button" aria-label="Search">
            <Search size={17} strokeWidth={2.2} />
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">HIGH SCHOOL PROGRAMS</p>
          <h1 id="hero-title">EARN THE DECA GLASS.</h1>
          <p className="hero-description">
            Build leadership, career skills, and real-world experience<br className="desktop-break" />
            through competition, community, and hands-on learning.
          </p>
          <a className="primary-button" href="#join">Join Now</a>
        </div>
      </section>

      <section className="vision-section" id="about" aria-labelledby="vision-title">
        <div className="vision-heading">
          <span className="vision-icon" aria-hidden="true">◇</span>
          <p className="vision-label">OUR VISION</p>
          <h2 id="vision-title">Washington DECA prepares innovative leaders<br className="desktop-break" /> and entrepreneurs who make a positive social<br className="desktop-break" /> and global impact.</h2>
        </div>

        <div className="pathway-grid">
          <article className="pathway-card">
            <img src="https://images.pexels.com/photos/8363749/pexels-photo-8363749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Student receiving recognition and a trophy" />
            <div className="pathway-overlay" />
            <div className="pathway-content">
              <h3>High School</h3>
              <div className="pathway-actions">
                <a className="outline-button" href="#chapters">Start a Chapter</a>
                <a className="learn-link" href="#high-school">Learn More <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </article>
          <article className="pathway-card">
            <img src="https://images.pexels.com/photos/38846534/pexels-photo-38846534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Graduate proudly holding a trophy" />
            <div className="pathway-overlay" />
            <div className="pathway-content">
              <h3>College</h3>
              <div className="pathway-actions">
                <a className="outline-button" href="#chapters">Start a Chapter</a>
                <a className="learn-link" href="#college">Learn More <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="events-section" id="events" aria-labelledby="events-title">
        <div className="events-header">
          <div>
            <h2 id="events-title">Upcoming Events</h2>
            <p className="events-location"><span aria-hidden="true">◢</span> Washington</p>
          </div>
          <a className="calendar-button" href="#calendar">View Calendar <span aria-hidden="true">→</span></a>
        </div>

        <div className="events-grid">
          <article className="event-card">
            <img src="https://images.pexels.com/photos/32227601/pexels-photo-32227601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Students dressed formally at a school event" />
            <div className="event-details">
              <div>
                <h3>DECA INC Advisor Professional Learning</h3>
                <p>July 15 - 16, 2026<br />Virtual</p>
              </div>
              <a className="details-button" href="#advisor-learning">Details</a>
            </div>
          </article>
          <article className="event-card">
            <img src="https://images.pexels.com/photos/12334433/pexels-photo-12334433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Students gathering at an educational event" />
            <div className="event-details">
              <div>
                <h3>WA-ACTE Summer Conference</h3>
                <p>August 2-5, 2026<br />Spokane</p>
              </div>
              <a className="details-button" href="#summer-conference">Details</a>
            </div>
          </article>
        </div>
      </section>

      <section className="membership-section" id="join" aria-labelledby="membership-title">
        <div className="membership-stat" aria-hidden="true">16,000+</div>
        <div className="membership-content">
          <p id="membership-title">More than 16,000 DECA student members from all over Washington<br className="desktop-break" /> and over 180 chapters are developing the next gen workforce.</p>
          <h2>Are you ready to join DECA?</h2>
          <div className="membership-actions">
            <a className="primary-button membership-primary" href="#join-deca">Join DECA <span aria-hidden="true">→</span></a>
            <a className="membership-learn" href="#learn-more">Learn More <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="involvement-section" id="involved" aria-labelledby="involvement-title">
        <div className="involvement-header">
          <div>
            <h2 id="involvement-title">Get Involved</h2>
            <p>Together, we can prepare emerging leaders and<br className="desktop-break" /> entrepreneurs for college and careers.</p>
          </div>
          <a className="dark-button" href="#learn-more">Learn More <span aria-hidden="true">→</span></a>
        </div>

        <div className="involvement-slider-wrap">
          <div className="involvement-slider" ref={involvementSlider} aria-label="Get involved options">
            {involvementCards.map((card) => (
              <article className={`involvement-card ${card.tone}`} key={card.title}>
                <div className="involvement-card-copy">
                  <span className="new-label">NEW</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                {card.image && <img src={card.image} alt="" />}
              </article>
            ))}
          </div>
          <button className="slider-arrow" type="button" aria-label="Show more ways to get involved" onClick={() => moveInvolvementSlider(1)}>→</button>
        </div>
      </section>
    </main>
  );
}

export default App;
