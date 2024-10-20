import React from 'react';

const WomensHealthIssues = () => {
  return (
    <div className="healthissues-section container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Women's Health Issues</h1>

      <section className="mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 card">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cervical Cancer and Vaccines</h2>
          <p className="mb-4 text-gray-700">Cervical cancer is a significant health concern for women, but it's largely preventable with proper screening and vaccination.</p>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Prevention:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>HPV Vaccination: Recommended for girls and women ages 9-26</li>
            <li>Regular Pap smears: Start at age 21 and continue as recommended by your doctor</li>
            <li>HPV testing: Often done alongside Pap smears for women 30 and older</li>
          </ul>
          <p className="mb-4 text-gray-700">Early detection through regular screenings is key to successful treatment. Consult with your healthcare provider about the appropriate screening schedule for you.</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 card">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Breast Health</h2>
          <p className="mb-4 text-gray-700">Maintaining breast health is crucial for early detection of breast cancer and other breast-related issues.</p>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Breast Self-Exams:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Perform monthly, preferably a few days after your period ends</li>
            <li>Look for changes in size, shape, or skin texture</li>
            <li>Feel for lumps, thickening, or other changes</li>
            <li>Report any changes to your healthcare provider immediately</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Mammograms:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Start annual mammograms at age 40, or earlier if you have risk factors</li>
            <li>Continue getting mammograms as long as you're in good health</li>
            <li>Discuss the appropriate screening schedule with your doctor</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 card">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Menopause</h2>
          <p className="mb-4 text-gray-700">Menopause is a natural biological process marking the end of menstrual cycles. Understanding its symptoms and management strategies can help women navigate this transition.</p>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Common Symptoms:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Hot flashes and night sweats</li>
            <li>Mood changes</li>
            <li>Vaginal dryness</li>
            <li>Sleep disturbances</li>
            <li>Weight gain and slowed metabolism</li>
            <li>Thinning hair and dry skin</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Management Strategies:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Hormone therapy (discuss risks and benefits with your doctor)</li>
            <li>Regular exercise and maintaining a healthy weight</li>
            <li>Eating a balanced diet rich in calcium and vitamin D</li>
            <li>Practicing stress-reduction techniques like yoga or meditation</li>
            <li>Using vaginal moisturizers or lubricants for dryness</li>
            <li>Avoiding triggers for hot flashes (e.g., spicy foods, alcohol)</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="bg-white shadow-md rounded-lg p-6 card">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Sexual Health</h2>
          <p className="mb-4 text-gray-700">Sexual health is an important aspect of overall well-being. Here are some key points to consider:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Safe Practices:</strong>
              <ul className="list-circle pl-6 mb-2 text-gray-700">
                <li>Use protection (condoms, dental dams) to prevent STIs</li>
                <li>Get regular STI screenings if sexually active</li>
                <li>Communicate openly with partners about sexual health</li>
              </ul>
            </li>
            <li><strong>Contraception:</strong>
              <ul className="list-circle pl-6 mb-2 text-gray-700">
                <li>Discuss contraceptive options with your healthcare provider</li>
                <li>Consider both hormonal and non-hormonal methods</li>
                <li>Use emergency contraception when necessary</li>
              </ul>
            </li>
            <li><strong>Sexual Dysfunction:</strong>
              <ul className="list-circle pl-6 mb-2 text-gray-700">
                <li>Common issues include low libido, pain during intercourse, and difficulty achieving orgasm</li>
                <li>Don't hesitate to discuss these issues with your healthcare provider</li>
                <li>Treatment options may include therapy, medication, or lifestyle changes</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-700">Remember, sexual health is a normal part of life, and it's important to address any concerns with a healthcare professional.</p>
        </div>
      </section>
    </div>
  );
};

export default WomensHealthIssues;