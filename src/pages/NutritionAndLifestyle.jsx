import React from 'react';

const NutritionAndLifestyle = () => {
  return (
    <div className="nutrition-section container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Nutrition and Lifestyle</h1>
      
      {/* Nutrition for Women Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nutrition for Women</h2>
        <p className="mb-4 text-gray-700">A balanced diet is crucial for women's health at all life stages. Here are some key nutrients and their importance:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Iron:</strong> Essential for preventing anemia, especially important during menstruation and pregnancy. Sources include lean meats, beans, and leafy greens.</li>
          <li><strong>Calcium:</strong> Vital for bone health, particularly important as women age. Found in dairy products, leafy greens, and fortified foods.</li>
          <li><strong>Folic Acid:</strong> Crucial for women of childbearing age to prevent birth defects. Sources include leafy greens, citrus fruits, and fortified grains.</li>
          <li><strong>Vitamin D:</strong> Important for calcium absorption and bone health. Obtained through sunlight exposure and foods like fatty fish and fortified dairy.</li>
          <li><strong>Omega-3 Fatty Acids:</strong> Beneficial for heart and brain health. Found in fatty fish, flaxseeds, and walnuts.</li>
        </ul>
        <p className="mb-4 text-gray-700">Dietary recommendations across life stages:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Young Adults:</strong> Focus on building healthy habits, including balanced meals and regular exercise.</li>
          <li><strong>Pregnancy:</strong> Increase calorie intake slightly, focus on nutrient-dense foods, and take prenatal vitamins as recommended by your doctor.</li>
          <li><strong>Postpartum:</strong> Emphasize nutrient-rich foods to support recovery and breastfeeding (if applicable).</li>
          <li><strong>Perimenopause and Menopause:</strong> Pay attention to calcium and vitamin D intake for bone health, and consider foods that may help manage symptoms like soy for hot flashes.</li>
        </ul>
      </section>

      {/* Physical Fitness Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Physical Fitness</h2>
        <p className="mb-4 text-gray-700">Regular physical activity is essential for overall health and well-being. Here are some exercise tips tailored for women:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Cardiovascular Exercise:</strong> Aim for at least 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity aerobic activity per week. Options include brisk walking, jogging, cycling, or swimming.</li>
          <li><strong>Strength Training:</strong> Include resistance exercises at least twice a week to maintain muscle mass, boost metabolism, and improve bone density. This can include weightlifting, bodyweight exercises, or resistance band workouts.</li>
          <li><strong>Flexibility and Balance:</strong> Incorporate stretching and balance exercises like yoga or Pilates to improve flexibility, reduce injury risk, and enhance overall body awareness.</li>
          <li><strong>Pelvic Floor Exercises:</strong> Kegel exercises can help strengthen pelvic floor muscles, which is particularly important during and after pregnancy, and as women age.</li>
        </ul>
        <p className="mb-4 text-gray-700">Tips for staying motivated:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Find activities you enjoy to make exercise more fun</li>
          <li>Set realistic goals and track your progress</li>
          <li>Exercise with a friend or join group fitness classes for accountability</li>
          <li>Mix up your routine to prevent boredom</li>
          <li>Remember that any amount of exercise is better than none – start small and build up gradually</li>
        </ul>
      </section>

      {/* Healthy Relationships Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Healthy Relationships</h2>
        <p className="mb-4 text-gray-700">Maintaining healthy relationships is crucial for emotional well-being and overall life satisfaction. Here are some key aspects of healthy relationships:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Communication:</strong> Practice open, honest, and respectful communication. Express your feelings and needs clearly, and listen actively to others.</li>
          <li><strong>Boundaries:</strong> Establish and respect personal boundaries. It's okay to say no and prioritize your own well-being.</li>
          <li><strong>Trust and Respect:</strong> Build relationships based on mutual trust and respect. Avoid judgmental attitudes and practice empathy.</li>
          <li><strong>Support:</strong> Offer emotional support to your loved ones and don't hesitate to seek support when you need it.</li>
          <li><strong>Independence:</strong> Maintain your individuality within relationships. Pursue your own interests and goals while supporting those of your partner or friends.</li>
          <li><strong>Conflict Resolution:</strong> Learn healthy ways to address and resolve conflicts. Focus on finding solutions rather than placing blame.</li>
        </ul>
        <p className="mb-4 text-gray-700">Remember, healthy relationships contribute significantly to your overall well-being and can provide a strong support system throughout various life stages.</p>
      </section>
    </div>
  );
};

export default NutritionAndLifestyle;