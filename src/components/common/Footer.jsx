import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a4a4a] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* CONNECT WITH US */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">
            Connect With Us
          </h3>

          <div className="flex gap-4">
            <a className="footer-icon">
              <Facebook size={20} />
            </a>
            <a className="footer-icon">
              <Instagram size={20} />
            </a>
            <a className="footer-icon">
              <Youtube size={20} />
            </a>
            <a className="footer-icon">
              <Mail size={20} />
            </a>
            <a className="footer-icon">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="footer-link">About Us</li>
            <li className="footer-link">What We Provide</li>
            <li className="footer-link">News & Events</li>
            <li className="footer-link">Gallery</li>
            <li className="footer-link">Admission</li>
          </ul>
        </div>

        {/* OTHER RESOURCES */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">
            Other Resources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="footer-link">Terms & Conditions</li>
            <li className="footer-link">Privacy Policy</li>
            <li className="footer-link">Contact Us</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="mt-12 border-t border-white"></div>

      {/* COPYRIGHT */}
      <p className="py-6 text-center text-sm text-white">
        Copyright © 2026 Milliya Girls High School.
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
