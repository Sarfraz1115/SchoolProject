import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "hover:text-yellow-400";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1f3d2b] z-50">
      <div className="w-full px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <h1 className="text-xl font-bold text-yellow-400">
            Milliya Girls High School
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-24 mr-14 text-white">
            <li>
              <NavLink to="/" className={linkClass}>Home</NavLink>
            </li>

            {/* ABOUT DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="cursor-pointer hover:text-yellow-400">
                About ▾
              </span>

              {aboutOpen && (
                <div
                  className="absolute left-0 top-full w-56 bg-[#274c37] shadow-lg"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <NavLink
                    to="/about"
                    className="block px-4 py-3 hover:bg-[#355f47]"
                  >
                    Our Mission
                  </NavLink>
                  <NavLink
                    to="/principle-desk"
                    className="block px-4 py-3 hover:bg-[#355f47]"
                  >
                    From Principal’s Desk
                  </NavLink>
                </div>
              )}
            </li>

            <li>
              <NavLink to="/courses" className={linkClass}>Academics</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#274c37] text-white px-6 py-4 space-y-3">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>Our Mission</NavLink>
          <NavLink to="/principle-desk" className={linkClass}>
            Principal Desk
          </NavLink>
          <NavLink to="/courses" className={linkClass}>Academics</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
