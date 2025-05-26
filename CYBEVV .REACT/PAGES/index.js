import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [signupMessage, setSignupMessage] = useState({ text: '', type: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEmailChange = (event) => setEmail(event.target.value);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = async (event) => {
    event.preventDefault();
    if (!email) {
      setSignupMessage({ text: 'Please enter your email address.', type: 'error' });
      return;
    }
    if (!isValidEmail(email)) {
      setSignupMessage({ text: 'Please enter a valid email address.', type: 'error' });
      return;
    }
    setSignupMessage({ text: 'Submitting...', type: 'submitting' });
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSignupMessage({ text: `Thank you for signing up, ${email}! We'll keep you updated.`, type: 'success' });
    setEmail('');
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);

  return (
    <div className={`${styles.container} page-fade-in`}>
      {/* Floating shapes for animation */}
      <span className={styles['floating-shape']} style={{ left: '10%', top: '18%', background: 'linear-gradient(135deg, #007bff, #ff6ec4)', borderRadius: '50%' }}></span>
      <span className={styles['floating-shape']} style={{ left: '80%', top: '30%', background: 'linear-gradient(135deg, #00c6ff, #7873f5)', borderRadius: '50%' }}></span>
      <header className={styles.header}>
        <div className={styles.logo}>CYBEV</div>
        <nav className={styles.nav} aria-label="Main navigation">
          <button
            className={styles['mobile-menu-button']}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="main-menu"
          >
            ☰
          </button>
          <ul
            id="main-menu"
            className={`${styles['nav-links']} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li><a href="#features">Features</a></li>
            <li><a href="#signup">Sign Up</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles['hero-content']}>
            <h1 className={`${styles['hero-title']} gradient-text typing-animation`}>
              Unlock Your Web3 World with CYBEV: Connect, Create, and Own.
            </h1>
            <p className={styles['hero-subtitle']}>
              Join a revolutionary platform empowering creators and communities through integrated social tools, a powerful blog builder, and seamless Web3 functionalities.
            </p>
            <div className={styles['hero-buttons']}>
              <a href="#signup" className={`${styles['primary-button']} pulse`}>
                Sign Up for Early Access
              </a>
              <a href="#features" className={styles['secondary-button']}>
                Explore Features
              </a>
            </div>
          </div>
        </section>

        <section id="features" className={styles.features}>
          <h2 className={styles['section-title']}>Phase 1 Features at a Glance</h2>
          <div className={styles['feature-grid']}>
            <div className={styles.feature}>
              <h3><span role="img" aria-label="Page icon">📄</span> Landing Page</h3>
              <p>A welcoming and informative introduction to the CYBEV platform.</p>
            </div>
            <div className={styles.feature}>
              <h3><span role="img" aria-label="User icon">👤</span> Sign-Up Flow</h3>
              <p>A streamlined process to create your CYBEV account and join our community.</p>
            </div>
            <div className={styles.feature}>
              <h3><span role="img" aria-label="Blog icon">✍️</span> Blog Builder</h3>
              <p>An intuitive tool to create, customize, and publish your own blog content.</p>
            </div>
            <div className={styles.feature}>
              <h3><span role="img" aria-label="Social icon">🌐</span> Social Feed</h3>
              <p>Connect with other users, share updates, and engage in community discussions.</p>
            </div>
            <div className={styles.feature}>
              <h3><span role="img" aria-label="Wallet icon">💰</span> Wallet UI</h3>
              <p>A secure and user-friendly interface to manage your digital assets.</p>
            </div>
            <div className={styles.feature}>
              <h3><span role="img" aria-label="NFT icon">🖼️</span> NFT Minting Screen</h3>
              <p>Easily create and mint your own Non-Fungible Tokens directly on the platform.</p>
            </div>
          </div>
        </section>

        <section id="signup" className={styles['signup-section']}>
          <div className={styles['signup-content']}>
            <h2 className={styles['section-title']}>Ready to Shape the Future of Web3 Communities?</h2>
            <p className={styles['signup-subtitle']}>
              Be the first to experience the power of CYBEV. Sign up for early access and stay informed about our launch.
            </p>
            <form onSubmit={handleSignup} className={styles['signup-form']} autoComplete="off">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                aria-label="Email address"
                required
              />
              <button type="submit" className={`${styles['primary-button']} pulse`}>
                Get Notified
              </button>
            </form>
            {signupMessage.text && (
              <div className={`${styles['signup-message']} ${styles[signupMessage.type]}`}>
                {signupMessage.text}
              </div>
            )}
          </div>
        </section>

        <section className={styles['placeholder-section']}>
          <h2 className={styles['section-title']}>Explore What's Coming in Phase 2</h2>
          <p className={styles['placeholder-text']}>
            Phase 2 will introduce powerful features like secure User Authentication (Web2/Web3), a full-fledged Blog Engine, enhanced Social Timeline, Token Integration for seamless transactions, advanced NFT Minting options, DAO Voting for community governance, and a comprehensive Admin Dashboard.
          </p>
        </section>

        <section className={styles['placeholder-section']}>
          <h2 className={styles['section-title']}>Anticipate Our Phase 3 Launch</h2>
          <p className={styles['placeholder-text']}>
            Our launch phase will bring full Web3 Wallet Support, integration with DEXs and Stablecoins, complete Mobile Optimization for on-the-go access, Live Content Publishing capabilities, and strategic Growth Campaigns to expand the CYBEV ecosystem.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; 2025 CYBEV. All rights reserved.
      </footer>
    </div>
  );
}