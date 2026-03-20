import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Pulse - Cultural Intelligence Platform</title>
        <meta name="description" content="Transforming raw data into real-time insights, trends, and predictions" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-gradient" />
            <div className="hero-grid" />
          </div>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              Real-Time Intelligence Platform
            </div>
            <h1 className="hero-title">
              Digital Pulse
              <span className="hero-subtitle-line">Cultural Intelligence Platform</span>
            </h1>
            <p className="hero-description">
              Transforming raw data into real-time insights, trends, and predictions.
              Monitor narratives, detect emerging signals, and forecast viral content
              before it peaks.
            </p>
            <div className="hero-buttons">
              <Link href="/dashboard" className="btn-primary">
                Go to Dashboard
                <span className="btn-arrow">→</span>
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">50+</span>
                <span className="stat-label">Data Sources</span>
              </div>
              <div className="stat">
                <span className="stat-value">Real-Time</span>
                <span className="stat-label">Processing</span>
              </div>
              <div className="stat">
                <span className="stat-value">48h</span>
                <span className="stat-label">Forecasting</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="section-container">
            <div className="section-header-center">
              <h2>Powerful Features</h2>
              <p>Everything you need to understand and predict cultural trends</p>
            </div>
            <div className="features-grid">
              <FeatureCard
                icon="◎"
                title="Narrative Clustering"
                description="AI-powered grouping of related stories and topics using advanced NLP algorithms to identify patterns."
                color="#00d4ff"
              />
              <FeatureCard
                icon="◈"
                title="Virality Scoring"
                description="Real-time calculation of viral potential based on engagement velocity, sentiment, and reach metrics."
                color="#7b61ff"
              />
              <FeatureCard
                icon="◇"
                title="Emerging Signals"
                description="Early detection of trending topics before they peak, with growth rate monitoring and alerts."
                color="#00ff88"
              />
              <FeatureCard
                icon="◆"
                title="48-Hour Forecasting"
                description="Predictive analytics for trend trajectories using machine learning models and historical patterns."
                color="#ff3d8e"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="section-container">
            <div className="section-header-center">
              <h2>How It Works</h2>
              <p>From raw data to actionable insights in seconds</p>
            </div>
            <div className="pipeline-flow">
              <PipelineStep
                number="01"
                title="Data Ingestion"
                description="Collect data from multiple sources including RSS feeds, APIs, and CSV uploads"
                icon="📥"
              />
              <PipelineConnector />
              <PipelineStep
                number="02"
                title="Processing"
                description="Normalize, clean, and structure data for analysis using automated pipelines"
                icon="⚙️"
              />
              <PipelineConnector />
              <PipelineStep
                number="03"
                title="Analysis"
                description="Apply NLP, sentiment analysis, and clustering algorithms to extract insights"
                icon="🔍"
              />
              <PipelineConnector />
              <PipelineStep
                number="04"
                title="Visualization"
                description="Present insights through interactive dashboards, charts, and real-time alerts"
                icon="📊"
              />
            </div>
          </div>
        </section>

        {/* Kafka Section */}
        <section className="kafka-section">
          <div className="section-container">
            <div className="kafka-content">
              <div className="kafka-text">
                <h2>Real-Time Streaming with Kafka</h2>
                <p>
                  Our platform leverages Apache Kafka architecture for reliable,
                  scalable real-time data streaming. Process millions of events
                  per second with guaranteed delivery.
                </p>
                <ul className="kafka-features">
                  <li>
                    <span className="check">✓</span>
                    High-throughput message processing
                  </li>
                  <li>
                    <span className="check">✓</span>
                    Fault-tolerant distributed system
                  </li>
                  <li>
                    <span className="check">✓</span>
                    Real-time data pipelines
                  </li>
                  <li>
                    <span className="check">✓</span>
                    Scalable consumer groups
                  </li>
                </ul>
              </div>
              <div className="kafka-diagram">
                <div className="kafka-flow">
                  <div className="kafka-node producer">
                    <span className="node-icon">📤</span>
                    <span className="node-label">Producer</span>
                  </div>
                  <div className="kafka-arrow">→</div>
                  <div className="kafka-node topic">
                    <span className="node-icon">📨</span>
                    <span className="node-label">Topic</span>
                    <span className="node-sublabel">narratives-topic</span>
                  </div>
                  <div className="kafka-arrow">→</div>
                  <div className="kafka-node consumer">
                    <span className="node-icon">📥</span>
                    <span className="node-label">Consumer</span>
                  </div>
                  <div className="kafka-arrow">→</div>
                  <div className="kafka-node dashboard">
                    <span className="node-icon">📊</span>
                    <span className="node-label">Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="section-container">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Explore the dashboard and see cultural intelligence in action</p>
              <Link href="/dashboard" className="btn-primary btn-large">
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
        .landing-page {
          min-height: 100vh;
          background: #0a0a0f;
          color: #fff;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
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
          background: radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(123, 97, 255, 0.15) 0%, transparent 50%);
          animation: gradientMove 20s ease-in-out infinite;
        }

        @keyframes gradientMove {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5%, -5%); }
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .hero-content {
          position: relative;
          max-width: 900px;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 20px;
          font-size: 13px;
          color: #00d4ff;
          margin-bottom: 24px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #00d4ff;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-title {
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle-line {
          display: block;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 600;
          background: linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 8px;
        }

        .hero-description {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
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

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-large {
          padding: 20px 40px;
          font-size: 18px;
        }

        .hero-stats {
          display: flex;
          gap: 48px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-size: 32px;
          font-weight: 700;
          color: #00d4ff;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Sections */
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
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-header-center p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Features */
        .features {
          padding: 120px 0;
          background: linear-gradient(180deg, #0a0a0f 0%, #0f0f18 100%);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        /* How It Works */
        .how-it-works {
          padding: 120px 0;
        }

        .pipeline-flow {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          flex-wrap: wrap;
        }

        /* Kafka Section */
        .kafka-section {
          padding: 120px 0;
          background: linear-gradient(180deg, #0a0a0f 0%, #0d0d15 100%);
        }

        .kafka-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .kafka-content {
            grid-template-columns: 1fr;
          }
        }

        .kafka-text h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .kafka-text p {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 30px;
        }

        .kafka-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .kafka-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .check {
          color: #00ff88;
          font-weight: bold;
        }

        .kafka-diagram {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px;
        }

        .kafka-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .kafka-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 24px;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 12px;
          min-width: 100px;
        }

        .kafka-node.topic {
          background: rgba(123, 97, 255, 0.1);
          border-color: rgba(123, 97, 255, 0.2);
        }

        .kafka-node.consumer {
          background: rgba(0, 255, 136, 0.1);
          border-color: rgba(0, 255, 136, 0.2);
        }

        .kafka-node.dashboard {
          background: rgba(255, 61, 142, 0.1);
          border-color: rgba(255, 61, 142, 0.2);
        }

        .node-icon {
          font-size: 24px;
        }

        .node-label {
          font-size: 13px;
          font-weight: 600;
        }

        .node-sublabel {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
        }

        .kafka-arrow {
          font-size: 24px;
          color: rgba(255, 255, 255, 0.3);
        }

        /* CTA Section */
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

/* Feature Card Component */
function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="feature-card">
      <div className="feature-icon" style={{ color, background: `${color}15`, borderColor: `${color}30` }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>

      <style jsx>{`
        .feature-card {
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          border-radius: 12px;
          border: 1px solid;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        p {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}

/* Pipeline Step Component */
function PipelineStep({ number, title, description, icon }) {
  return (
    <div className="pipeline-step">
      <div className="step-number">{number}</div>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>

      <style jsx>{`
        .pipeline-step {
          flex: 1;
          min-width: 200px;
          max-width: 250px;
          padding: 32px 24px;
          text-align: center;
        }

        .step-number {
          font-size: 12px;
          font-weight: 700;
          color: #00d4ff;
          margin-bottom: 16px;
        }

        .step-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }

        h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        p {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
}

/* Pipeline Connector */
function PipelineConnector() {
  return (
    <div className="pipeline-connector">
      <div className="connector-line" />
      <style jsx>{`
        .pipeline-connector {
          display: flex;
          align-items: center;
          padding: 0 8px;
        }

        .connector-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #00d4ff, #7b61ff);
          opacity: 0.5;
        }

        @media (max-width: 900px) {
          .pipeline-connector {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
