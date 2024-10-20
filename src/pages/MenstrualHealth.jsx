import React from 'react';

const MenstrualHealth = () => {
  return (
    <div className="menstrual-section container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Menstrual Health</h1>
      
      {/* Menstrual Hygiene Section */}
      <section className="mb-8 bg-gray-700 shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Menstrual Hygiene</h2>
        <p className="mb-4 text-gray-800">Maintaining proper menstrual hygiene is crucial for overall health and well-being. Here are some best practices:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Change your sanitary product every 4-6 hours, or more frequently if needed.</li>
          <li>Wash your hands before and after changing your sanitary product.</li>
          <li>Choose the right absorbency for your flow to prevent leaks and discomfort.</li>
          <li>Consider using eco-friendly and sustainable menstrual products.</li>
        </ul>
      </section>

      {/* Menstrual Disorders Section */}
      <section className="mb-8 bg-gray-700 shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Menstrual Disorders</h2>
        <p className="mb-4 text-gray-800">Common menstrual disorders include:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>PCOS (Polycystic Ovary Syndrome):</strong> A hormonal disorder causing enlarged ovaries with small cysts.</li>
          <li><strong>Endometriosis:</strong> A condition where tissue similar to the lining of the uterus grows outside the uterus.</li>
          <li><strong>Dysmenorrhea:</strong> Severe menstrual cramps and pain during periods.</li>
          <li><strong>Menorrhagia:</strong> Abnormally heavy or prolonged menstrual bleeding.</li>
        </ul>
        <p className="text-gray-800">If you experience symptoms of these disorders, consult with a healthcare professional for proper diagnosis and treatment.</p>
      </section>

      {/* Menstruation Myths Section */}
      <section className="mb-8 bg-gray-700 shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Menstruation Myths</h2>
        <p className="mb-4 text-gray-800">Let's debunk some common myths about menstruation:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Myth:</strong> Women are impure during menstruation.<br />
              <strong>Fact:</strong> Menstruation is a natural biological process and does not make a woman impure.</li>
          <li><strong>Myth:</strong> You shouldn't exercise during your period.<br />
              <strong>Fact:</strong> Exercise can actually help alleviate menstrual cramps and improve mood.</li>
          <li><strong>Myth:</strong> You can't get pregnant during your period.<br />
              <strong>Fact:</strong> While unlikely, it is still possible to get pregnant during menstruation.</li>
        </ul>
      </section>

      {/* Menstrual Cups Section */}
      <section className="mb-8 bg-gray-700 shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Menstrual Cups</h2>
        <p className="mb-4 text-gray-800">Menstrual cups are becoming increasingly popular. Here are some pros and cons compared to sanitary pads:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card bg-gray-600 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Pros</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Eco-friendly and reusable</li>
              <li>Cost-effective in the long run</li>
              <li>Can be worn for up to 12 hours</li>
              <li>Reduces odor and leakage</li>
            </ul>
          </div>
          <div className="card bg-gray-600 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Cons</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Initial learning curve for insertion and removal</li>
              <li>Higher upfront cost</li>
              <li>Requires access to clean water for washing</li>
              <li>May not be suitable for those with certain medical conditions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenstrualHealth;