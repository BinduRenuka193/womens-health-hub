import React from 'react';

const InspirationalStories = () => {
  return (
    <div className="stories-section container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Inspirational Stories</h1>
      
      {/* Personal Experiences Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-50">Personal Experiences</h2>
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-semibold mb-2">Sarah's Journey: Overcoming Postpartum Depression</h3>
            <p className="mb-4">Sarah, a 32-year-old mother of two, shares her experience with postpartum depression and how she found the strength to overcome it.</p>
            <blockquote className="italic border-l-4 border-pink-500 pl-4 py-2 mb-4">
              "After the birth of my second child, I felt overwhelmed and disconnected. It was more than just 'baby blues.' With the support of my family, therapy, and a supportive mom group, I gradually found my way back to myself. Now, I want to share my story to help other mothers know they're not alone."
            </blockquote>
            <p>Sarah's story highlights the importance of seeking help and building a support network when dealing with postpartum depression.</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-semibold mb-2">Maria's Triumph: Beating Breast Cancer</h3>
            <p className="mb-4">Maria, a 45-year-old teacher, shares her journey of battling and overcoming breast cancer.</p>
            <blockquote className="italic border-l-4 border-pink-500 pl-4 py-2 mb-4">
              "When I was diagnosed, I felt like my world was falling apart. But I decided to face it head-on. Through the challenging treatments, I found strength I never knew I had. Today, I'm cancer-free and more appreciative of life than ever before."
            </blockquote>
            <p>Maria's story emphasizes the importance of regular screenings and the power of a positive attitude in facing health challenges.</p>
          </div>
        </div>
      </section>
      
      {/* Empowerment and Community Support Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-50">Empowerment and Community Support</h2>
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-semibold mb-2">The 'Fit at Fifty' Club: Women Supporting Women</h3>
            <p className="mb-4">A group of women in their fifties started a fitness club to support each other in maintaining health and wellness during menopause and beyond.</p>
            <blockquote className="italic border-l-4 border-pink-500 pl-4 py-2 mb-4">
              "We realized that staying active becomes even more important as we age. Our club isn't just about exercise; it's about friendship, mutual support, and proving that age is just a number when it comes to fitness and health."
            </blockquote>
            <p>This story showcases how community support can make a significant difference in maintaining health and wellness, especially during life transitions.</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 card">
            <h3 className="text-xl font-semibold mb-2">Lisa's Mission: Raising Awareness for PCOS</h3>
            <p className="mb-4">After struggling with Polycystic Ovary Syndrome (PCOS) for years, Lisa started a support group and awareness campaign in her community.</p>
            <blockquote className="italic border-l-4 border-pink-500 pl-4 py-2 mb-4">
              "PCOS affected my life in so many ways, and I felt alone for a long time. By starting this group, I've not only found a supportive community but also helped many women get diagnosed and treated early."
            </blockquote>
            <p>Lisa's initiative demonstrates how personal challenges can be transformed into opportunities to help others and create positive change.</p>
          </div>
        </div>
      </section>
      
      {/* Share Your Story Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-50">Share Your Story</h2>
        <p className="mb-4">Your experience could inspire and help others. If you have a story about overcoming a health challenge, making a positive lifestyle change, or supporting others in their health journey, we'd love to hear from you.</p>
        <p className="mb-4">To share your story, please email us at <a href="mailto:stories@womenshealthhub.com" className="text-violet-950 underline">stories@womenshealthhub.com</a>. Include a brief summary of your experience and how it has impacted your life or the lives of others.</p>
        <p>Remember, every story has the power to make a difference. Your journey could be the inspiration someone else needs to take the first step towards better health.</p>
      </section>
    </div>
  );
};

export default InspirationalStories;