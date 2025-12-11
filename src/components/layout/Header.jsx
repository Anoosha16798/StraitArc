import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGO } from "../../constants/images";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-sa_bg/95 backdrop-blur border-b border-sa_line/70">
      <div className="container-custom">
        {/* Top row */}
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo + wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={LOGO.ICON_BROWN}
              alt="Studio Strait Arc"
              className="h-8 w-8 rounded-full object-contain"
            />
            <div className="leading-tight ml-2">
              <span className="uppercase tracking-[0.24em] text-[10px] text-sa_muted">
                Studio
              </span>
              <div className="text-sm font-medium tracking-[0.08em]">
                Strait Arc
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `uppercase tracking-[0.2em] ${
                    isActive ? "text-sa_ink" : "text-sa_muted hover:text-sa_ink"
                  } transition-colors text-xs`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Socials */}
          <div className="hidden md:flex items-center gap-4 text-sa_muted">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sa_ink transition-colors"
            >
              <FiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sa_ink transition-colors"
            >
              <FiFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sa_ink transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Section divider under header */}
        <div className="divider-soft" />
      </div>
    </header>
  );
};

export default Header;
