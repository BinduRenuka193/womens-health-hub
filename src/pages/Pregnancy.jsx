import React from 'react';

const Pregnancy = () => {
  return (
    <div className="pregnancy-section container mx-auto px-4 py-8 bg-gray-800">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Pregnancy and Prenatal Care</h1>
      
      {/* Nutrition During Pregnancy Section */}
      <section className="mb-8 bg-gray-700 shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Nutrition During Pregnancy</h2>
        <p className="mb-4 text-gray-800">Eating a balanced diet is essential for both mother and baby. Here are some key nutrients:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Folic Acid:</strong> Important for fetal development; found in leafy greens, nuts, and fortified cereals.</li>
          <li><strong>Iron:</strong> Supports increased blood volume; sources include lean meats, beans, and spinach.</li>
          <li><strong>Calcium:</strong> Essential for bone health; found in dairy products, tofu, and leafy greens.</li>
          <li><strong>Protein:</strong> Crucial for tissue growth; good sources include poultry, fish, beans, and legumes.</li>
        </ul>
      </section>

      {/* Common Symptoms During Pregnancy Section */}
      <section className="mb-8 bg-gray-700 shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Common Symptoms During Pregnancy</h2>
        <p className="mb-4 text-gray-800">Pregnancy can come with various symptoms. Here are some common ones:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Nausea:</strong> Often referred to as "morning sickness," it can occur at any time of day.</li>
          <li><strong>Fatigue:</strong> Increased hormonal changes can lead to feeling more tired than usual.</li>
          <li><strong>Back Pain:</strong> As the belly grows, back pain may become more prevalent.</li>
          <li><strong>Frequent Urination:</strong> The growing uterus can put pressure on the bladder.</li>
        </ul>
      </section>

      {/* Exercise During Pregnancy Section */}
      <section className="mb-8 bg-gray-700 shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Exercise During Pregnancy</h2>
        <p className="mb-4 text-gray-800">Regular exercise during pregnancy has numerous benefits:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Improves mood and reduces stress.</li>
          <li>Helps with weight management.</li>
          <li>Improves sleep quality.</li>
          <li>Increases stamina for labor and delivery.</li>
        </ul>
        <p className="text-gray-800">Always consult with a healthcare provider before starting or continuing an exercise regimen during pregnancy.</p>
      </section>

      {/* Postpartum Care Section */}
      <section className="mb-8 bg-gray-700 shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Postpartum Care</h2>
        <p className="mb-4 text-gray-800">After delivery, it's essential to prioritize recovery. Here are some tips:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Rest as much as possible to allow your body to heal.</li>
          <li>Stay hydrated and maintain a nutritious diet.</li>
          <li>Seek support from friends, family, or a postpartum doula.</li>
          <li>Consult with a healthcare provider for any concerns or complications.</li>
        </ul>
      </section>
    </div>
  );
};

export default Pregnancy;