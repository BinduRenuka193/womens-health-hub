import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Women's Health Hub</h3>
            <p>Empowering women through health education and support.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><Link to="/" className="hover:text-pink-300">Home</Link></li>
              <li><Link to="/faqs" className="hover:text-pink-300">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-pink-300">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-300"><Facebook /></a>
              <a href="#" className="hover:text-pink-300"><Twitter /></a>
              <a href="#" className="hover:text-pink-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Women's Health Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;