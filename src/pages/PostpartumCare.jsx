import React from 'react';

const PostpartumCare = () => {
  return (
    <div className="postpartum-section container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Postpartum Care</h1>
      
      {/* Post-Delivery Care Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Post-Delivery Care</h2>
        <p className="mb-4 text-gray-700">The postpartum period is crucial for recovery after childbirth. Here are some essential tips:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Get plenty of rest and sleep when your baby sleeps</li>
          <li>Stay hydrated and maintain a nutritious diet</li>
          <li>Follow your healthcare provider's instructions for wound care (if applicable)</li>
          <li>Do gentle exercises as recommended by your doctor</li>
          <li>Wear comfortable, supportive clothing</li>
          <li>Accept help from family and friends for household tasks and baby care</li>
          <li>Attend all postpartum check-ups with your healthcare provider</li>
        </ul>
      </section>

      {/* Mental Health Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mental Health</h2>
        <p className="mb-4 text-gray-700">Postpartum mental health is just as important as physical recovery. Be aware of the following:</p>
        
        {/* Postpartum Depression Section */}
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Postpartum Depression (PPD)</h3>
        <p className="mb-4 text-gray-700">Symptoms of PPD may include:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Persistent sadness or mood swings</li>
          <li>Difficulty bonding with your baby</li>
          <li>Withdrawing from family and friends</li>
          <li>Changes in appetite or sleep patterns</li>
          <li>Overwhelming fatigue or loss of energy</li>
          <li>Intense irritability or anger</li>
          <li>Feelings of worthlessness or guilt</li>
        </ul>
        <p className="mb-4 text-gray-700">If you experience these symptoms, it's crucial to seek help from a healthcare professional.</p>

        {/* Mental Well-being Tips Section */}
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Mental Well-being Tips</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Practice self-care and make time for yourself</li>
          <li>Connect with other new parents or join support groups</li>
          <li>Communicate openly with your partner about your feelings</li>
          <li>Consider counseling or therapy if you're struggling</li>
          <li>Practice relaxation techniques like deep breathing or meditation</li>
        </ul>
      </section>

      {/* Self-Care Practices Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Self-Care Practices</h2>
        <p className="mb-4 text-gray-700">Taking care of yourself is essential for recovery and being able to care for your newborn. Here are some self-care recommendations:</p>
        
        {/* Physical Care Section */}
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li><strong>Physical care:</strong>
            <ul className="list-circle pl-6 mb-2">
              <li>Take soothing baths or showers</li>
              <li>Use ice packs or heating pads for discomfort</li>
              <li>Practice pelvic floor exercises</li>
              <li>Gradually return to light exercise with your doctor's approval</li>
            </ul>
          </li>
          
          {/* Emotional Care Section */}
          <li><strong>Emotional care:</strong>
            <ul className="list-circle pl-6 mb-2">
              <li>Journal your thoughts and feelings</li>
              <li>Practice mindfulness or meditation</li>
              <li>Engage in hobbies or activities you enjoy</li>
              <li>Spend quality time with your partner</li>
            </ul>
          </li>

          {/* Practical Care Section */}
          <li><strong>Practical care:</strong>
            <ul className="list-circle pl-6 mb-2">
              <li>Meal prep or accept meals from friends and family</li>
              <li>Create a comfortable nursing or feeding station</li>
              <li>Set realistic expectations for household chores</li>
              <li>Use online grocery delivery services</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-700">Remember, taking care of yourself is not selfish – it's necessary for your well-being and your ability to care for your baby.</p>
      </section>
    </div>
  );
};

export default PostpartumCare;