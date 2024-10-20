import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="contact-section container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
      
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-8" role="alert">
          <strong className="font-bold">Thank you for your message!</strong>
          <p className="block sm:inline"> We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-50 shadow-md rounded-lg p-6 mb-8 card">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
      
      {/* Other Ways to Reach Us Section */}
      <div className="mt-12 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Other Ways to Reach Us</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Email: <a href="mailto:info@womenshealthhub.com" className="text-pink-500 underline">info@womenshealthhub.com</a></li>
          <li className="mb-2">Phone: (555) 123-4567</li>
          <li className="mb-2">Address: 123 Health Street, Wellness City, WH 12345</li>
        </ul>
      </div>
      
      {/* Follow Us on Social Media Section */}
      <div className="mt-12 bg-white shadow-md rounded-lg p-6 card">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Follow Us on Social Media</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Facebook: <a href="https://facebook.com/WomensHealthHub" className="text-pink-500 underline">@WomensHealthHub</a></li>
          <li className="mb-2">Twitter: <a href="https://twitter.com/WHealthHub" className="text-pink-500 underline">@WHealthHub</a></li>
          <li className="mb-2">Instagram: <a href="https://instagram.com/womens_health_hub" className="text-pink-500 underline">@womens_health_hub</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;