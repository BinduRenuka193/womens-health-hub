import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-pink-500 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Heart size={32} />
            <span className="text-2xl font-bold">Women's Health Hub</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-pink-200">Home</Link></li>
              <li><Link to="/menstrual-health" className="hover:text-pink-200">Menstrual Health</Link></li>
              <li><Link to="/pregnancy" className="hover:text-pink-200">Pregnancy</Link></li>
              <li><Link to="/postpartum-care" className="hover:text-pink-200">Postpartum Care</Link></li>
              <li><Link to="/womens-health-issues" className="hover:text-pink-200">Health Issues</Link></li>
              <li><Link to="/nutrition-and-lifestyle" className="hover:text-pink-200">Nutrition & Lifestyle</Link></li>
              <li><Link to="/faqs" className="hover:text-pink-200">FAQs</Link></li>
              <li><Link to="/inspirational-stories" className="hover:text-pink-200">Stories</Link></li>
              <li><Link to="/contact" className="hover:text-pink-200">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;