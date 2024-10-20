import React from 'react';

const FAQs = () => {
  return (
    <div className="faq-section container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Frequently Asked Questions</h1>
      
      {/* General FAQs Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">General FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: How often should I have a gynecological check-up?</h3>
            <p className="text-gray-700">A: It's generally recommended to have an annual gynecological check-up. However, the frequency may vary based on your age, health history, and risk factors. Consult with your healthcare provider for personalized advice.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: What are the signs of a urinary tract infection (UTI)?</h3>
            <p className="text-gray-700">A: Common signs of a UTI include a frequent urge to urinate, burning sensation during urination, cloudy or strong-smelling urine, and pelvic pain. If you experience these symptoms, consult a healthcare provider promptly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: How can I manage PMS symptoms?</h3>
            <p className="text-gray-700">A: To manage PMS symptoms, try regular exercise, stress-reduction techniques like yoga or meditation, maintaining a balanced diet, getting enough sleep, and avoiding caffeine and alcohol. Over-the-counter pain relievers can help with cramps. For severe symptoms, consult your doctor about additional treatment options.</p>
          </div>
        </div>
      </section>

      {/* Pregnancy FAQs Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Pregnancy FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: When should I start taking prenatal vitamins?</h3>
            <p className="text-gray-700">A: It's recommended to start taking prenatal vitamins as soon as you start trying to conceive. If pregnancy is unplanned, start taking them as soon as you find out you're pregnant. Folic acid, in particular, is crucial in the early stages of pregnancy.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: Is it safe to exercise during pregnancy?</h3>
            <p className="text-gray-700">A: In most cases, exercise during pregnancy is safe and beneficial. However, always consult with your healthcare provider before starting or continuing any exercise routine. Low-impact activities like walking, swimming, and prenatal yoga are generally safe for most pregnant women.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: What foods should I avoid during pregnancy?</h3>
            <p className="text-gray-700">A: During pregnancy, it's recommended to avoid raw or undercooked meat and eggs, unpasteurized dairy products, high-mercury fish, raw sprouts, and unwashed produce. Also, limit caffeine intake and avoid alcohol completely.</p>
          </div>
        </div>
      </section>

      {/* Menopause FAQs Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Menopause FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: At what age does menopause typically start?</h3>
            <p className="text-gray-700">A: The average age for menopause is 51, but it can occur anywhere between 45 and 55. Menopause is officially diagnosed when a woman has gone 12 consecutive months without a menstrual period.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: How long do menopausal symptoms last?</h3>
            <p className="text-gray-700">A: The duration of menopausal symptoms varies greatly among women. On average, symptoms can last anywhere from 7 to 14 years. Some women experience symptoms for a shorter time, while others may have them for longer.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: Is hormone replacement therapy safe?</h3>
            <p className="text-gray-700">A: Hormone replacement therapy (HRT) can be safe and effective for many women, but it's not suitable for everyone. The risks and benefits of HRT depend on individual factors such as age, health history, and specific symptoms. Always consult with your healthcare provider to determine if HRT is appropriate for you.</p>
          </div>
        </div>
      </section>

      {/* Nutrition and Lifestyle FAQs Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nutritional FAQs</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: How much calcium do women need daily?</h3>
            <p className="text-gray-700">A: The recommended daily calcium intake for women varies by age. Women 19-50 years old need 1,000 mg per day, while women over 50 need 1,200 mg per day. Good sources include dairy products, leafy greens, and fortified foods.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: How can I reduce my risk of osteoporosis?</h3>
            <p className="text-gray-700">A: To reduce the risk of osteoporosis, ensure adequate calcium and vitamin D intake, engage in weight-bearing exercises regularly, avoid smoking, limit alcohol consumption, and maintain a healthy weight. If you have risk factors for osteoporosis, discuss preventive measures with your healthcare provider.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Q: What are the best exercises for women's health?</h3>
            <p className="text-gray-700">A: A well-rounded exercise routine for women should include a mix of cardiovascular exercise, strength training, and flexibility work. Good options include brisk walking, jogging, cycling, swimming, weightlifting, yoga, and Pilates. The best exercise is one that you enjoy and can maintain consistently.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;