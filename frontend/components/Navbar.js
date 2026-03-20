import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

const Navbar = memo(function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <span className="brand-icon">◈</span>
          <span className="brand-text">Digital Pulse</span>
        </Link>

        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`navbar-link ${currentPath === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/dashboard" className="navbar-cta">
          Launch Dashboard
        </Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }

        .brand-icon {
          font-size: 26px;
          background: linear-gradient(135deg, #00d4ff, #7b61ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .brand-text {
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar-links {
          display: flex;
          gap: 8px;
        }

        .navbar-link {
          padding: 10px 20px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .navbar-link:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .navbar-link.active {
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.1);
        }

        .navbar-cta {
          padding: 10px 24px;
          background: linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%);
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .navbar-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 16px;
          }

          .navbar-links {
            display: none;
          }

          .navbar-cta {
            padding: 8px 16px;
            font-size: 13px;
          }

          .brand-text {
            font-size: 16px;
          }
        }
      `}</style>
    </nav>
  );
});

export default Navbar;
