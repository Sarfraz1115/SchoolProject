import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="bg-[#1a4a4a] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-12 items-center justify-between">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md"
                    : "hover:text-gray-300"
                }
              >
                HOME
              </NavLink>
            </li>

            {/* ABOUT DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span className="cursor-pointer hover:text-gray-300">
                ABOUT ▾
              </span>

              {aboutOpen && (
                <div
                  className="absolute rounded-2xl left-0 top-full w-56 bg-[#134040] shadow-lg"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 text-sm ${isActive
                        ? "bg-[#3DD5C3] text-[#1a4a4a]"
                        : "hover:bg-[#1a5555]"
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/principle-desk"
                    className={({ isActive }) =>
                      `block px-4 rounded-2xl py-3 text-sm ${isActive
                        ? "bg-[#3DD5C3] text-[#1a4a4a]"
                        : "hover:bg-[#1a5555]"
                      }`
                    }
                  >
                    Principal's Desk
                  </NavLink>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md"
                    : "hover:text-gray-300"
                }
              >
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/activities"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md"
                    : "hover:text-gray-300"
                }
              >
                ACTIVITIES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achievements"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md"
                    : "hover:text-gray-300"
                }
              >
                ACHIEVEMENTS
              </NavLink>
            </li>
          </ul>

          {/* LOGIN Button */}
          <div className="hidden md:block">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm font-semibold uppercase ${isActive
                  ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md"
                  : "hover:text-gray-300"
                }`
              }
            >
              LOGIN
            </NavLink>
          </div>

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
        <div className="md:hidden bg-[#1a4a4a] text-white px-6 py-4 space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block ${isActive ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md" : "hover:text-gray-300"}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block ${isActive ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md" : "hover:text-gray-300"}`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/principle-desk"
            className={({ isActive }) =>
              `block pl-4 ${isActive ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md" : "hover:text-gray-300"}`
            }
          >
            Principal's Desk
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `block ${isActive ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md" : "hover:text-gray-300"}`
            }
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              `block ${isActive ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md" : "hover:text-gray-300"}`
            }
          >
            ACTIVITIES
          </NavLink>
          <NavLink
            to="/achievements"
            className={({ isActive }) =>
              `block ${isActive ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md" : "hover:text-gray-300"}`
            }
          >
            ACHIEVEMENTS
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `block ${isActive ? "bg-[#3DD5C3] text-[#1a4a4a] px-3 py-2 rounded-md" : "hover:text-gray-300"}`
            }
          >
            LOGIN
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
