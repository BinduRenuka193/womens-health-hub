import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenstrualHealth from './pages/MenstrualHealth';
import Pregnancy from './pages/Pregnancy';
import PostpartumCare from './pages/PostpartumCare';
import WomensHealthIssues from './pages/WomensHealthIssues';
import NutritionAndLifestyle from './pages/NutritionAndLifestyle';
import FAQs from './pages/FAQs';
import InspirationalStories from './pages/InspirationalStories';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menstrual-health" element={<MenstrualHealth />} />
            <Route path="/pregnancy" element={<Pregnancy />} />
            <Route path="/postpartum-care" element={<PostpartumCare />} />
            <Route path="/womens-health-issues" element={<WomensHealthIssues />} />
            <Route path="/nutrition-and-lifestyle" element={<NutritionAndLifestyle />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/inspirational-stories" element={<InspirationalStories />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;