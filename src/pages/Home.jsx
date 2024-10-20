import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-section container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Welcome to Women's Health Hub</h1>
      <p className="text-xl text-center mb-12 text-white">Empowering women with knowledge for a healthier life</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/menstrual-health" className="bg-pink-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Menstrual Health</h2>
          <p>Learn about menstrual hygiene, disorders, and myths.</p>
        </Link>
        <Link to="/pregnancy" className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Pregnancy</h2>
          <p>Discover tips for a healthy pregnancy and prenatal care.</p>
        </Link>
        <Link to="/postpartum-care" className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Postpartum Care</h2>
          <p>Find support and advice for the postpartum period.</p>
        </Link>
        <Link to="/womens-health-issues" className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Women's Health Issues</h2>
          <p>Information on common health concerns for women.</p>
        </Link>
        <Link to="/nutrition-and-lifestyle" className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Nutrition & Lifestyle</h2>
          <p>Tips for maintaining a healthy diet and lifestyle.</p>
        </Link>
        <Link to="/inspirational-stories" className="bg-red-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Inspirational Stories</h2>
          <p>Read about women overcoming health challenges.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;