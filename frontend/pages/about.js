import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const teamMembers = [
  {
    name: 'Fayaz Ahmed T',
    role: 'Team Leader',
    department: '2nd Year CSE-A',
    color: '#00d4ff',
  },
  {
    name: 'Ananya K',
    role: 'Member',
    department: '2nd Year CSE-A',
    color: '#7b61ff',
  },
  {
    name: 'Nithis Kumar AL',
    role: 'Member',
    department: '2nd Year CSE-C',
    color: '#00ff88',
  },
  {
    name: 'Devananth V',
    role: 'Member',
    department: '3rd Year AD-A',
    color: '#ff9f43',
  },
  {
    name: 'Haarini R',
    role: 'Member',
    department: '3rd Year AD-A',
    color: '#ff3d8e',
  },
  {
    name: 'Dharsan P',
    role: 'Member',
    department: '3rd Year AD-A',
    color: '#3ecf8e',
  },
];

const techStack = [
  { name: 'Next.js', description: 'React framework for production', icon: '⚡' },
  { name: 'JavaScript', description: 'Core programming language', icon: '📜' },
  { name: 'Recharts / D3', description: 'Data visualization libraries', icon: '📊' },
  { name: 'Supabase / API', description: 'Backend and database services', icon: '🗄️' },
  { name: 'Kafka', description: 'Real-time streaming (simulated)', icon: '📨' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Digital Pulse</title>
        <meta name="description" content="Learn about the team behind Digital Pulse" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-bg">
            <div className="hero-gradient" />
          </div>
          <div className="hero-content">
            <h1>About Digital Pulse</h1>
            <p>Building the future of cultural intelligence analytics</p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="section">
          <div className="section-container">
            <div className="overview-grid">
              <div className="overview-text">
                <h2>Project Overview</h2>
                <p>
                  Digital Pulse is a cutting-edge Cultural Intelligence Platform designed
                  to transform raw data into actionable insights. Our system monitors
                  narratives across multiple data sources, detects emerging trends,
                  calculates virality scores, and forecasts content performance.
                </p>
                <p>
                  Built with modern technologies and real-time streaming architecture,
                  Digital Pulse provides a comprehensive dashboard for understanding
                  and predicting cultural trends before they peak.
                </p>
                <div className="overview-highlights">
                  <div className="highlight">
                    <span className="highlight-icon">🎯</span>
                    <span>Real-time narrative tracking</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-icon">📈</span>
                    <span>Predictive analytics</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-icon">🔔</span>
                    <span>Emerging signal alerts</span>
                  </div>
                </div>
              </div>
              <div className="overview-visual">
                <div className="visual-card">
                  <div className="visual-icon">◈</div>
                  <div className="visual-text">Cultural Intelligence Engine</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section team-section">
          <div className="section-container">
            <div className="section-header-center">
              <h2>Meet Our Team</h2>
              <p>The talented individuals behind Digital Pulse</p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section vision-section">
          <div className="section-container">
            <div className="vision-content">
              <h2>Our Vision</h2>
              <blockquote>
                "To democratize cultural intelligence by providing powerful,
                accessible tools that help organizations understand and anticipate
                trends in real-time."
              </blockquote>
              <p>
                We believe that understanding cultural trends shouldn't require
                expensive enterprise solutions. Digital Pulse aims to bring
                sophisticated analytics capabilities to everyone, powered by
                open-source technologies and innovative algorithms.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header-center">
              <h2>Technology Stack</h2>
              <p>Powered by modern, scalable technologies</p>
            </div>
            <div className="tech-grid">
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-card">
                  <div className="tech-icon">{tech.icon}</div>
                  <h3>{tech.name}</h3>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Ready to Explore?</h2>
              <p>Dive into the dashboard and experience cultural intelligence in action</p>
              <Link href="/dashboard" className="btn-primary">
                Launch Dashboard
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-brand">
              <span className="footer-logo">◈</span>
              <span>Digital Pulse</span>
            </div>
            <nav className="footer-nav">
              <Link href="/">Home</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/about">About</Link>
            </nav>
            <div className="footer-copy">
              © {new Date().getFullYear()} Digital Pulse. Built for the Hackathon.
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: #0a0a0f;
          color: #fff;
        }

        /* Hero */
        .about-hero {
          position: relative;
          padding: 180px 24px 100px;
          text-align: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-gradient {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, rgba(123, 97, 255, 0.15) 0%, transparent 50%);
        }

        .hero-content {
          position: relative;
        }

        .hero-content h1 {
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .hero-content p {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Sections */
        .section {
          padding: 100px 0;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header-center {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header-center h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-header-center p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Overview */
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .overview-grid {
            grid-template-columns: 1fr;
          }
        }

        .overview-text h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .overview-text p {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
        }

        .overview-highlights {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }

        .highlight {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
        }

        .highlight-icon {
          font-size: 20px;
        }

        .overview-visual {
          display: flex;
          justify-content: center;
        }

        .visual-card {
          width: 280px;
          height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(123, 97, 255, 0.1) 100%);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 50%;
          text-align: center;
        }

        .visual-icon {
          font-size: 64px;
          background: linear-gradient(135deg, #00d4ff, #7b61ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .visual-text {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Team */
        .team-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #0f0f18 100%);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        /* Vision */
        .vision-section {
          background: linear-gradient(180deg, #0f0f18 0%, #0a0a0f 100%);
        }

        .vision-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .vision-content h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 32px;
        }

        .vision-content blockquote {
          font-size: 24px;
          font-style: italic;
          line-height: 1.6;
          color: #00d4ff;
          margin: 0 0 32px;
          padding: 0 20px;
          border-left: 3px solid #00d4ff;
          text-align: left;
        }

        .vision-content p {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Tech Stack */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }

        .tech-card {
          padding: 32px 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .tech-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }

        .tech-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .tech-card p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        /* CTA */
        .cta-section {
          padding: 120px 0;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 32px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%);
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 212, 255, 0.3);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Footer */
        .footer {
          padding: 60px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 600;
        }

        .footer-logo {
          font-size: 24px;
          background: linear-gradient(135deg, #00d4ff, #7b61ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-nav {
          display: flex;
          gap: 32px;
        }

        .footer-nav a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-nav a:hover {
          color: #fff;
        }

        .footer-copy {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

/* Team Card Component */
function TeamCard({ member }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="team-card">
      <div
        className="avatar"
        style={{
          background: `linear-gradient(135deg, ${member.color}30, ${member.color}10)`,
          borderColor: `${member.color}50`,
          color: member.color,
        }}
      >
        {initials}
      </div>
      <h3>{member.name}</h3>
      <span
        className="role-badge"
        style={{
          background: member.role === 'Team Leader' ? `${member.color}20` : 'rgba(255,255,255,0.05)',
          color: member.role === 'Team Leader' ? member.color : 'rgba(255,255,255,0.7)',
          borderColor: member.role === 'Team Leader' ? `${member.color}40` : 'rgba(255,255,255,0.1)',
        }}
      >
        {member.role}
      </span>
      <p className="department">{member.department}</p>

      <style jsx>{`
        .team-card {
          padding: 32px 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .avatar {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 700;
          border-radius: 50%;
          border: 2px solid;
        }

        h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .role-badge {
          display: inline-block;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 20px;
          border: 1px solid;
          margin-bottom: 8px;
        }

        .department {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}
